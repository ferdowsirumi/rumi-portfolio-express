"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const utils_1 = require("../utils");
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Ferdowsi Rumi | Hazera', page: 'index', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('aboutme', { title: 'About Me', page: 'aboutme', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectsPage(req, res, next) {
    res.render('projects', { title: 'Projects', page: 'projects', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayServicesPage(req, res, next) {
    res.render('service', { title: 'Services', page: 'service', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayContactPage(req, res, next) {
    res.render('contact', { title: 'Contact', page: 'contact', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayContactPage = DisplayContactPage;
//# sourceMappingURL=index.js.map