"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
var router = express_1.default.Router();
router.get('/', controllers_1.DisplayHomePage);
router.get('/home', controllers_1.DisplayHomePage);
router.get('/index', controllers_1.DisplayHomePage);
router.get('/rumi', controllers_1.DisplayHomePage);
router.get('/about', controllers_1.DisplayAboutPage);
router.get('/projects', controllers_1.DisplayProjectsPage);
router.get('/service', controllers_1.DisplayServicesPage);
router.get('/contact', controllers_1.DisplayContactPage);
router.get('/cv', (req, res, next) => {
    res.download('./public/Ferdowsi_Rumi_CV.pdf');
});
router.get('/p/*', function (req, res, next) {
    res.sendFile(req.path);
});
exports.default = router;
//# sourceMappingURL=index.js.map