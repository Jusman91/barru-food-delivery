import { customValidationReqBody } from './customValidationReqBody';
import { foodValidationSchema } from './schema/food';

export const validationBody = {
	food: customValidationReqBody(foodValidationSchema),
};
