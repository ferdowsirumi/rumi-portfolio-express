import express from 'express';
import { HttpError } from 'http-errors';
import { isLoggedIn } from '../middlewares/auth';

import ContactModel from '../models/contact';
import { UserDisplayName } from '../utils';

//(R)ead in CRUD
export function DisplayListPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    
    ContactModel.find(function (err, contactCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        contactCollection.sort((a, b) => a.contactName.toLowerCase().localeCompare(b.contactName.toLowerCase()))
        res.render('contact/contact-list', { title: 'Contact list', page: 'contact/contact-list', contact: contactCollection, displayName: UserDisplayName(req) })
    })
}

// Display (E)dit page
export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;
    if (id != 'favicon.ico')
        ContactModel.findById(id, {}, {}, (err, contactItemToEdit) => {
            if (err) {
                console.error(err);
                res.end(err);
            };
            if (contactItemToEdit !== undefined) {
                console.log("Edit Contact", contactItemToEdit);
                res.render('contact/contact-edit', { title: "Contact Edit", page: "contact/contact-edit", item: contactItemToEdit, displayName: UserDisplayName(req) })
            }
        })
}

// Display (C)reate page
export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    // show the edit view
    res.render('contact/contact-edit', { title: 'Add Contact', page: 'contact/contact-edit', item: '', displayName: UserDisplayName(req) });
}

// Process (E)dit page
export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;

    let updatedItem = new ContactModel({
        "_id": id,
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress
    });

    ContactModel.updateOne({ _id: id }, updatedItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.redirect('/contact/list');
         res.end(err);
        }

        res.redirect('/contact/list');
    })
}

// Process (C)reate page
export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void {

    let newItem = new ContactModel({
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress
    });

    ContactModel.create(newItem, (err: HttpError) => {
        if (err) {
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact/list');
    })
}

// Process (D)elete page
export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;

    ContactModel.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact/list');
    })
}
