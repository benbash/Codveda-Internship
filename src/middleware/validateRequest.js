import mongoose from 'mongoose';
import AppError from '../utils/appError.js';

const isPlainObject = (value) =>
  value !== null && typeof value === 'object' && !Array.isArray(value);

const isNonEmptyString = (value) =>
  typeof value === 'string' && value.trim().length > 0;

const isBoolean = (value) => typeof value === 'boolean';

const isNumber = (value) => typeof value === 'number' && Number.isFinite(value);

const isArrayOfStrings = (value) =>
  Array.isArray(value) && value.every((item) => typeof item === 'string');

const isValidObjectId = (value) => mongoose.Types.ObjectId.isValid(value);

const runValidation = (validator) => (req, _res, next) => {
  const errors = validator(req);

  if (errors.length > 0) {
    return next(new AppError('Request validation failed', 400, errors));
  }

  return next();
};

const validateLocation = (location, label = 'location') => {
  const errors = [];

  if (!isPlainObject(location)) {
    return [`${label} must be an object`];
  }

  ['description', 'city', 'state', 'landmark'].forEach((field) => {
    if (location[field] !== undefined && !isNonEmptyString(location[field])) {
      errors.push(`${label}.${field} must be a non-empty string`);
    }
  });

  if (location.country !== undefined && !isNonEmptyString(location.country)) {
    errors.push(`${label}.country must be a non-empty string`);
  }

  ['lat', 'lng'].forEach((field) => {
    if (location[field] !== undefined && !isNumber(location[field])) {
      errors.push(`${label}.${field} must be a valid number`);
    }
  });

  return errors;
};

const validateDateString = (value, fieldName, required = false) => {
  const errors = [];

  if (value === undefined || value === null || value === '') {
    if (required) {
      errors.push(`${fieldName} is required`);
    }
    return errors;
  }

  if (Number.isNaN(Date.parse(value))) {
    errors.push(`${fieldName} must be a valid date string`);
  }

  return errors;
};

const validateStatus = (value, allowedValues, fieldName) => {
  if (value !== undefined && !allowedValues.includes(value)) {
    return [`${fieldName} must be one of ${allowedValues.join(', ')}`];
  }

  return [];
};

export const validateObjectIdParam = (paramName) =>
  runValidation((req) => {
    if (!isValidObjectId(req.params[paramName])) {
      return [`${paramName} must be a valid MongoDB ObjectId`];
    }

    return [];
  });

export const validateRegister = runValidation((req) => {
  const body = req.body;
  const errors = [];

  if (!isNonEmptyString(body.fullName)) {
    errors.push('fullName is required');
  }

  if (!isNonEmptyString(body.email)) {
    errors.push('email is required');
  }

  if (!isNonEmptyString(body.password) || body.password.length < 6) {
    errors.push('password is required and must be at least 6 characters');
  }

  if (!isNonEmptyString(body.phoneNumber)) {
    errors.push('phoneNumber is required');
  }

  if (!isNonEmptyString(body.state)) {
    errors.push('state is required');
  }

  if (!isNonEmptyString(body.lga)) {
    errors.push('lga is required');
  }

  errors.push(
    ...validateStatus(body.role, ['user', 'admin', 'customer', 'vendor', 'rider'], 'role')
  );

  return errors;
});

export const validateLogin = runValidation((req) => {
  const body = req.body;
  const errors = [];

  if (!isNonEmptyString(body.email)) {
    errors.push('email is required');
  }

  if (!isNonEmptyString(body.password)) {
    errors.push('password is required');
  }

  return errors;
});

export const validateForgotPassword = runValidation((req) => {
  const errors = [];

  if (!isNonEmptyString(req.body.email)) {
    errors.push('email is required');
  }

  return errors;
});

export const validateResetPassword = runValidation((req) => {
  const errors = [];

  if (!isNonEmptyString(req.body.password) || req.body.password.length < 6) {
    errors.push('password is required and must be at least 6 characters');
  }

  return errors;
});

export const validateProfileUpdate = runValidation((req) => {
  const body = req.body;
  const errors = [];

  ['fullName', 'name', 'phoneNumber', 'state', 'lga'].forEach((field) => {
    if (body[field] !== undefined && !isNonEmptyString(body[field])) {
      errors.push(`${field} must be a non-empty string`);
    }
  });

  if (body.email !== undefined && !isNonEmptyString(body.email)) {
    errors.push('email must be a non-empty string');
  }

  if (body.role !== undefined) {
    errors.push(
      ...validateStatus(body.role, ['user', 'admin', 'customer', 'vendor', 'rider'], 'role')
    );
  }

  return errors;
});

