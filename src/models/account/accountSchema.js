/**
 * Created by danstan on 5/9/17.
 */
import mongoose from 'mongoose';

var accountSchema = new mongoose.Schema({
    id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
    username: { type:String, required:true, unique:true},
    email: { type:String, required:true, unique:true},
    accountType: String,
    dateCreated: Object

});

let account = mongoose.model('account', accountSchema);

module.exports = account;

module.exports.getListOfAccounts = () => {
    return new Promise((resolve, reject) => {
        account.find({}).exec((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

module.exports.getAccountById = (root, {id}) => {
    return new Promise((resolve, reject) => {
        account.findOne({
            id: id
        }).exec((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

module.exports.getAccountByUsername = (root, {username}) => {
    return new Promise((resolve, reject) => {
        account.findOne({
            username: username
        }).exec((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

module.exports.getAccountByEmail = (root, {email}) => {
    return new Promise((resolve, reject) => {
        account.find({}).exec((err, res) => {
            err ? reject(err) : resolve(res[email]);
        });
    });
};

module.exports.addAccount = (root, {username, email,accountType}) => {
    //Get Current DateTime
    let creationDate=new Date()
    var newAccount = new account({username:username, email:email,accountType:accountType, dateCreated:creationDate});

    return new Promise((resolve, reject) => {
        newAccount.save((err, res) => {
            err ? reject(err): resolve(res);
        });
    });
}

module.exports.updateAccount = (root, {id, username, email,accountType}) => {
    var updateAccount = {username:username, email:email,accountType:accountType};
    return new Promise((resolve, reject) => {
        account.findOneAndUpdate(
            { id: id },
            { $set: updateAccount },
            { returnNewDocument: true }
        ).exec((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
}
