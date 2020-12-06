import {getModelForClass, index, prop} from '@typegoose/typegoose';

export {User, UserModel}

class NestedData {

  public _id?: string;

  @prop({default: new Date(), index: true})
  public dateOfCreation?: Date;

}

class NestedArray {

  public _id?: string;

  @prop({default: new Date(), index: true})
  public dateOfCreation?: Date;

}

@index({
  "nickname": "text"
}, {})
class User {

  public _id?: string;

  @prop({default: new Date(), index: true})
  public dateOfCreation?: Date;

  @prop({required: true, index: true})
  public nickname?: string;

  @prop({required: true, index: true})
  public password?: string;

  @prop({required: true, index: true, default: () => ({})})
  public nestedData?: NestedData;

  @prop({type: () => [NestedArray], default: []})
  public nestedArray?: NestedArray[];

}

const UserModel = getModelForClass(User, {
  schemaOptions: {collection: 'users'},
});
