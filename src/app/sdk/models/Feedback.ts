/* tslint:disable */

declare var Object: any;
export interface FeedbackInterface {
  "Name": string;
  "Email": string;
  "Age": number;
  "Gender"?: string;
  "Country"?: string;
  "Experience"?: string;
  "Suggestions"?: string;
  "id"?: any;
}

export class Feedback implements FeedbackInterface {
  "Name": string;
  "Email": string;
  "Age": number;
  "Gender": string;
  "Country": string;
  "Experience": string;
  "Suggestions": string;
  "id": any;
  constructor(data?: FeedbackInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Feedback`.
   */
  public static getModelName() {
    return "Feedback";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Feedback for dynamic purposes.
  **/
  public static factory(data: FeedbackInterface): Feedback{
    return new Feedback(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Feedback',
      plural: 'Feedbacks',
      path: 'Feedbacks',
      properties: {
        "Name": {
          name: 'Name',
          type: 'string'
        },
        "Email": {
          name: 'Email',
          type: 'string'
        },
        "Age": {
          name: 'Age',
          type: 'number'
        },
        "Gender": {
          name: 'Gender',
          type: 'string'
        },
        "Country": {
          name: 'Country',
          type: 'string'
        },
        "Experience": {
          name: 'Experience',
          type: 'string'
        },
        "Suggestions": {
          name: 'Suggestions',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
