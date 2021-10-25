import express from 'express';
import { UserDisplayName } from '../utils';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Ferdowsi Rumi | Hazera', page: 'index', displayName: UserDisplayName(req) });
}

export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('aboutme', { title: 'About Me', page: 'aboutme', displayName: UserDisplayName(req) });
}

export function DisplayProjectsPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('projects', { title: 'Projects', page: 'projects', displayName: UserDisplayName(req) });
}

export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('service', { title: 'Services', page: 'service', displayName: UserDisplayName(req) });
}

export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('contact', { title: 'Contact', page: 'contact', displayName: UserDisplayName(req) });
}