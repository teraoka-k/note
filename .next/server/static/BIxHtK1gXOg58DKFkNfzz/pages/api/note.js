module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("OA69");


/***/ }),

/***/ "OA69":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__("ykE2");

// CONCATENATED MODULE: ./logic/mongoAPI.ts

const URL = 'mongodb://localhost:27017';
const NAME = 'mongodb';
async function insertDocument(collectionName, document) {
  await crudCollection(collectionName, async collection => await collection.insertOne(document));
}
async function findDocuments(collectionName, filter) {
  return await crudCollection(collectionName, async collection => await collection.find(filter).toArray());
}
async function updateDocument(collectionName, filter, newDocument) {
  await crudCollection(collectionName, async collection => await collection.updateOne(filter, {
    $set: newDocument
  }));
}
async function deleteDocument(collectionName, filter) {
  await crudCollection(collectionName, async collection => await collection.deleteOne(filter));
}
/**
 * @private
 */

async function crudCollection(collectionName, method) {
  let client;

  try {
    client = await external_mongodb_["MongoClient"].connect(URL, {
      useNewUrlParser: true
    });
    const collection = client.db(NAME).collection(collectionName);
    return await method(collection);
  } finally {
    client.close();
  }
}
// CONCATENATED MODULE: ./model/note.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const note_collectionName = 'note';
class note_Note {
  constructor(text) {
    _defineProperty(this, "_id", void 0);

    _defineProperty(this, "text", void 0);

    this.text = text;
  }

  async insert() {
    await insertDocument(note_collectionName, this);
  }

  static async find(id) {
    return await findDocuments(note_collectionName, id ? {
      _id: new external_mongodb_["ObjectID"](id)
    } : {});
  }

  static async delete(id) {
    await deleteDocument(note_collectionName, {
      _id: new external_mongodb_["ObjectID"](id)
    });
  }

  static async update(id, text) {
    await updateDocument(note_collectionName, {
      _id: new external_mongodb_["ObjectID"](id)
    }, {
      text
    });
  }

}
// CONCATENATED MODULE: ./pages/api/note.ts

/* harmony default export */ var note = __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case 'GET':
      res.status(200).json(await note_Note.find());
      break;

    case 'POST':
      const text = JSON.parse(req.body).text;
      await new note_Note(text).insert();
      res.status(200).json({
        message: 'ok'
      });
      break;

    case 'PUT':
      const body = JSON.parse(req.body);
      await note_Note.update(body.id, body.text);
      res.status(200).json({
        message: 'ok'
      });
      break;

    case 'DELETE':
      const id = JSON.parse(req.body);
      await note_Note.delete(id);
      res.status(200).json({
        message: 'ok'
      });
      break;
  }
});

/***/ }),

/***/ "ykE2":
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });