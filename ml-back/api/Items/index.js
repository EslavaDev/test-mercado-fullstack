"use strict";
const express = require("express");
const Controller = require("./ItemsController");
const app = express();

app.get("/items/healtcheck", Controller.healtCheck);
/**
 * @swagger
 * "/api/items/healtcheck":
 *   get:
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: "API service is OK"
 *       400:
 *         description: "API service is broken"
 */

app.get("/items", Controller.GetItems);
/**
 * @swagger
 * "/api/items":
 *   get:
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: "API service is OK"
 *       400:
 *         description: "API service is broken"
 */

app.get("/items/:id", Controller.GetItem);
/**
 * @swagger
 * "/api/items":
 *   get:
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: "API service is OK"
 *       400:
 *         description: "API service is broken"
 */

module.exports = app;
