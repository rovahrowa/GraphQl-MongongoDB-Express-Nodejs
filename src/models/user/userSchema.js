/**
 * Created by danstan on 5/9/17.
 */
import mongoose from 'mongoose';

var userSchema = new mongoose.Schema({
  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  name: String,
  address:String,
  email: String,
  tel: String,
  type: String
});

let user = mongoose.model('user', userSchema);

module.exports = user;

module.exports.getListOfUsers = () => {
  return new Promise((resolve, reject) => {
    user.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getUserById = (root, {id}) => {
  return new Promise((resolve, reject) => {
    user.findOne({
        id: id
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getUserByName = (root, {name}) => {
  return new Promise((resolve, reject) => {
    user.findOne({
      name: name
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getUserByPosition = (root, {id}) => {
  return new Promise((resolve, reject) => {
    user.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res[id]);
    });
  });
};

module.exports.addUser = (root, {name,address, email, tel}) => {
  var newUser = new user({name:name,address:address, email:email, tel:tel});

  return new Promise((resolve, reject) => {
    newUser.save((err, res) => {
      err ? reject(err): resolve(res);
    });
  });
}

module.exports.updateUser = (root, {name,address, email, tel}) => {
  var updateUser = {name:name,address:address, email:email, tel:tel};
  return new Promise((resolve, reject) => {
    user.findOneAndUpdate(
        { id: id },
        { $set: updateUser },
        { returnNewDocument: true }
    ).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}
