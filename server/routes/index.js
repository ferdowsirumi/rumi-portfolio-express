"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Ferdowsi Rumi | Hazera' });
});
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home' });
});
router.get('/index', function (req, res, next) {
    res.render('index', { title: 'Home' });
});
router.get('/about', function (req, res, next) {
    res.render('aboutme', { title: 'About Me' });
});
router.get('/projects', function (req, res, next) {
    res.render('projects', { title: 'Projects' });
});
router.get('/service', function (req, res, next) {
    res.render('service', { title: 'Services' });
});
router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Contact' });
});
router.get('/cv', (req, res, next) => {
    res.download('./public/Ferdowsi_Rumi_CV.pdf');
});
router.get('/p/*', function (req, res, next) {
    res.sendFile(req.path);
});
exports.default = router;
//# sourceMappingURL=index.js.map