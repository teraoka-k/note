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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./logic/mongoAPI.ts":
/*!***************************!*\
  !*** ./logic/mongoAPI.ts ***!
  \***************************/
/*! exports provided: insertDocument, findDocuments, updateDocument, deleteDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertDocument\", function() { return insertDocument; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findDocuments\", function() { return findDocuments; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateDocument\", function() { return updateDocument; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteDocument\", function() { return deleteDocument; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst URL = 'mongodb://localhost:27017';\nconst NAME = 'mongodb';\nasync function insertDocument(collectionName, document) {\n  await crudCollection(collectionName, async collection => await collection.insertOne(document));\n}\nasync function findDocuments(collectionName, filter) {\n  return await crudCollection(collectionName, async collection => await collection.find(filter).toArray());\n}\nasync function updateDocument(collectionName, filter, newDocument) {\n  await crudCollection(collectionName, async collection => await collection.updateOne(filter, {\n    $set: newDocument\n  }));\n}\nasync function deleteDocument(collectionName, filter) {\n  await crudCollection(collectionName, async collection => await collection.deleteOne(filter));\n}\n/**\n * @private\n */\n\nasync function crudCollection(collectionName, method) {\n  let client;\n\n  try {\n    client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(URL, {\n      useNewUrlParser: true\n    });\n    const collection = client.db(NAME).collection(collectionName);\n    return await method(collection);\n  } finally {\n    client.close();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sb2dpYy9tb25nb0FQSS50cz9kZjk0Il0sIm5hbWVzIjpbIlVSTCIsIk5BTUUiLCJpbnNlcnREb2N1bWVudCIsImNvbGxlY3Rpb25OYW1lIiwiZG9jdW1lbnQiLCJjcnVkQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJmaW5kRG9jdW1lbnRzIiwiZmlsdGVyIiwiZmluZCIsInRvQXJyYXkiLCJ1cGRhdGVEb2N1bWVudCIsIm5ld0RvY3VtZW50IiwidXBkYXRlT25lIiwiJHNldCIsImRlbGV0ZURvY3VtZW50IiwiZGVsZXRlT25lIiwibWV0aG9kIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwiZGIiLCJjbG9zZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLEdBQUcsR0FBRywyQkFBWjtBQUNBLE1BQU1DLElBQUksR0FBRyxTQUFiO0FBRU8sZUFBZUMsY0FBZixDQUE4QkMsY0FBOUIsRUFBc0RDLFFBQXRELEVBQXdFO0FBQzdFLFFBQU1DLGNBQWMsQ0FDbEJGLGNBRGtCLEVBRWxCLE1BQU9HLFVBQVAsSUFBc0IsTUFBTUEsVUFBVSxDQUFDQyxTQUFYLENBQXFCSCxRQUFyQixDQUZWLENBQXBCO0FBSUQ7QUFFTSxlQUFlSSxhQUFmLENBQ0xMLGNBREssRUFFTE0sTUFGSyxFQUdXO0FBQ2hCLFNBQU8sTUFBTUosY0FBYyxDQUN6QkYsY0FEeUIsRUFFekIsTUFBT0csVUFBUCxJQUFzQixNQUFNQSxVQUFVLENBQUNJLElBQVgsQ0FBZ0JELE1BQWhCLEVBQXdCRSxPQUF4QixFQUZILENBQTNCO0FBSUQ7QUFFTSxlQUFlQyxjQUFmLENBQ0xULGNBREssRUFFTE0sTUFGSyxFQUdMSSxXQUhLLEVBSUw7QUFDQSxRQUFNUixjQUFjLENBQ2xCRixjQURrQixFQUVsQixNQUFPRyxVQUFQLElBQ0UsTUFBTUEsVUFBVSxDQUFDUSxTQUFYLENBQXFCTCxNQUFyQixFQUE2QjtBQUFFTSxRQUFJLEVBQUVGO0FBQVIsR0FBN0IsQ0FIVSxDQUFwQjtBQUtEO0FBRU0sZUFBZUcsY0FBZixDQUE4QmIsY0FBOUIsRUFBc0RNLE1BQXRELEVBQXNFO0FBQzNFLFFBQU1KLGNBQWMsQ0FDbEJGLGNBRGtCLEVBRWxCLE1BQU9HLFVBQVAsSUFBc0IsTUFBTUEsVUFBVSxDQUFDVyxTQUFYLENBQXFCUixNQUFyQixDQUZWLENBQXBCO0FBSUQ7QUFFRDs7OztBQUdBLGVBQWVKLGNBQWYsQ0FDRUYsY0FERixFQUVFZSxNQUZGLEVBR0U7QUFDQSxNQUFJQyxNQUFKOztBQUNBLE1BQUk7QUFDRkEsVUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FBb0JyQixHQUFwQixFQUF5QjtBQUFFc0IscUJBQWUsRUFBRTtBQUFuQixLQUF6QixDQUFmO0FBQ0EsVUFBTWhCLFVBQVUsR0FBR2EsTUFBTSxDQUFDSSxFQUFQLENBQVV0QixJQUFWLEVBQWdCSyxVQUFoQixDQUEyQkgsY0FBM0IsQ0FBbkI7QUFDQSxXQUFPLE1BQU1lLE1BQU0sQ0FBQ1osVUFBRCxDQUFuQjtBQUNELEdBSkQsU0FJVTtBQUNSYSxVQUFNLENBQUNLLEtBQVA7QUFDRDtBQUNGIiwiZmlsZSI6Ii4vbG9naWMvbW9uZ29BUEkudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCwgQ29sbGVjdGlvbiB9IGZyb20gJ21vbmdvZGInXG5cbmNvbnN0IFVSTCA9ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3J1xuY29uc3QgTkFNRSA9ICdtb25nb2RiJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zZXJ0RG9jdW1lbnQoY29sbGVjdGlvbk5hbWU6IHN0cmluZywgZG9jdW1lbnQ6IG9iamVjdCkge1xuICBhd2FpdCBjcnVkQ29sbGVjdGlvbihcbiAgICBjb2xsZWN0aW9uTmFtZSxcbiAgICBhc3luYyAoY29sbGVjdGlvbikgPT4gYXdhaXQgY29sbGVjdGlvbi5pbnNlcnRPbmUoZG9jdW1lbnQpXG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmREb2N1bWVudHMoXG4gIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcsXG4gIGZpbHRlcjogb2JqZWN0XG4pOiBQcm9taXNlPGFueVtdPiB7XG4gIHJldHVybiBhd2FpdCBjcnVkQ29sbGVjdGlvbihcbiAgICBjb2xsZWN0aW9uTmFtZSxcbiAgICBhc3luYyAoY29sbGVjdGlvbikgPT4gYXdhaXQgY29sbGVjdGlvbi5maW5kKGZpbHRlcikudG9BcnJheSgpXG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURvY3VtZW50KFxuICBjb2xsZWN0aW9uTmFtZTogc3RyaW5nLFxuICBmaWx0ZXI6IG9iamVjdCxcbiAgbmV3RG9jdW1lbnQ6IG9iamVjdFxuKSB7XG4gIGF3YWl0IGNydWRDb2xsZWN0aW9uKFxuICAgIGNvbGxlY3Rpb25OYW1lLFxuICAgIGFzeW5jIChjb2xsZWN0aW9uKSA9PlxuICAgICAgYXdhaXQgY29sbGVjdGlvbi51cGRhdGVPbmUoZmlsdGVyLCB7ICRzZXQ6IG5ld0RvY3VtZW50IH0pXG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZURvY3VtZW50KGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcsIGZpbHRlcjogb2JqZWN0KSB7XG4gIGF3YWl0IGNydWRDb2xsZWN0aW9uKFxuICAgIGNvbGxlY3Rpb25OYW1lLFxuICAgIGFzeW5jIChjb2xsZWN0aW9uKSA9PiBhd2FpdCBjb2xsZWN0aW9uLmRlbGV0ZU9uZShmaWx0ZXIpXG4gIClcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5hc3luYyBmdW5jdGlvbiBjcnVkQ29sbGVjdGlvbihcbiAgY29sbGVjdGlvbk5hbWU6IHN0cmluZyxcbiAgbWV0aG9kOiAoY29sbGVjdGlvbjogQ29sbGVjdGlvbjxhbnk+KSA9PiBQcm9taXNlPGFueT5cbikge1xuICBsZXQgY2xpZW50OiBNb25nb0NsaWVudFxuICB0cnkge1xuICAgIGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoVVJMLCB7IHVzZU5ld1VybFBhcnNlcjogdHJ1ZSB9KVxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBjbGllbnQuZGIoTkFNRSkuY29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSlcbiAgICByZXR1cm4gYXdhaXQgbWV0aG9kKGNvbGxlY3Rpb24pXG4gIH0gZmluYWxseSB7XG4gICAgY2xpZW50LmNsb3NlKClcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./logic/mongoAPI.ts\n");

/***/ }),

/***/ "./model/note.ts":
/*!***********************!*\
  !*** ./model/note.ts ***!
  \***********************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Note\", function() { return Note; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logic_mongoAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/mongoAPI */ \"./logic/mongoAPI.ts\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst collectionName = 'note';\nclass Note {\n  constructor(text) {\n    _defineProperty(this, \"_id\", void 0);\n\n    _defineProperty(this, \"text\", void 0);\n\n    this.text = text;\n  }\n\n  async insert() {\n    await Object(_logic_mongoAPI__WEBPACK_IMPORTED_MODULE_1__[\"insertDocument\"])(collectionName, this);\n  }\n\n  static async find(id) {\n    return await Object(_logic_mongoAPI__WEBPACK_IMPORTED_MODULE_1__[\"findDocuments\"])(collectionName, id ? {\n      _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__[\"ObjectID\"](id)\n    } : {});\n  }\n\n  static async delete(id) {\n    await Object(_logic_mongoAPI__WEBPACK_IMPORTED_MODULE_1__[\"deleteDocument\"])(collectionName, {\n      _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__[\"ObjectID\"](id)\n    });\n  }\n\n  static async update(id, text) {\n    await Object(_logic_mongoAPI__WEBPACK_IMPORTED_MODULE_1__[\"updateDocument\"])(collectionName, {\n      _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__[\"ObjectID\"](id)\n    }, {\n      text\n    });\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbC9ub3RlLnRzP2IyMTUiXSwibmFtZXMiOlsiY29sbGVjdGlvbk5hbWUiLCJOb3RlIiwiY29uc3RydWN0b3IiLCJ0ZXh0IiwiaW5zZXJ0IiwiaW5zZXJ0RG9jdW1lbnQiLCJmaW5kIiwiaWQiLCJmaW5kRG9jdW1lbnRzIiwiX2lkIiwiT2JqZWN0SUQiLCJkZWxldGUiLCJkZWxldGVEb2N1bWVudCIsInVwZGF0ZSIsInVwZGF0ZURvY3VtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQU9BLE1BQU1BLGNBQWMsR0FBRyxNQUF2QjtBQUVPLE1BQU1DLElBQU4sQ0FBVztBQUloQkMsYUFBVyxDQUFDQyxJQUFELEVBQWU7QUFBQTs7QUFBQTs7QUFDeEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7O0FBRUQsUUFBTUMsTUFBTixHQUE4QjtBQUM1QixVQUFNQyxzRUFBYyxDQUFDTCxjQUFELEVBQWlCLElBQWpCLENBQXBCO0FBQ0Q7O0FBQ0QsZUFBYU0sSUFBYixDQUFrQkMsRUFBbEIsRUFBZ0Q7QUFDOUMsV0FBUSxNQUFNQyxxRUFBYSxDQUN6QlIsY0FEeUIsRUFFekJPLEVBQUUsR0FBRztBQUFFRSxTQUFHLEVBQUUsSUFBSUMsZ0RBQUosQ0FBYUgsRUFBYjtBQUFQLEtBQUgsR0FBK0IsRUFGUixDQUEzQjtBQUlEOztBQUNELGVBQWFJLE1BQWIsQ0FBb0JKLEVBQXBCLEVBQStDO0FBQzdDLFVBQU1LLHNFQUFjLENBQUNaLGNBQUQsRUFBaUI7QUFBRVMsU0FBRyxFQUFFLElBQUlDLGdEQUFKLENBQWFILEVBQWI7QUFBUCxLQUFqQixDQUFwQjtBQUNEOztBQUNELGVBQWFNLE1BQWIsQ0FBb0JOLEVBQXBCLEVBQWdDSixJQUFoQyxFQUE2RDtBQUMzRCxVQUFNVyxzRUFBYyxDQUFDZCxjQUFELEVBQWlCO0FBQUVTLFNBQUcsRUFBRSxJQUFJQyxnREFBSixDQUFhSCxFQUFiO0FBQVAsS0FBakIsRUFBNEM7QUFBRUo7QUFBRixLQUE1QyxDQUFwQjtBQUNEOztBQXRCZSIsImZpbGUiOiIuL21vZGVsL25vdGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYmplY3RJRCB9IGZyb20gJ21vbmdvZGInXG5pbXBvcnQge1xuICBpbnNlcnREb2N1bWVudCxcbiAgZmluZERvY3VtZW50cyxcbiAgZGVsZXRlRG9jdW1lbnQsXG4gIHVwZGF0ZURvY3VtZW50LFxufSBmcm9tICcuLi9sb2dpYy9tb25nb0FQSSdcblxuY29uc3QgY29sbGVjdGlvbk5hbWUgPSAnbm90ZSdcblxuZXhwb3J0IGNsYXNzIE5vdGUge1xuICBfaWQ6IHN0cmluZ1xuICB0ZXh0OiBzdHJpbmdcblxuICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcpIHtcbiAgICB0aGlzLnRleHQgPSB0ZXh0XG4gIH1cblxuICBhc3luYyBpbnNlcnQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgaW5zZXJ0RG9jdW1lbnQoY29sbGVjdGlvbk5hbWUsIHRoaXMpXG4gIH1cbiAgc3RhdGljIGFzeW5jIGZpbmQoaWQ/OiBzdHJpbmcpOiBQcm9taXNlPE5vdGVbXT4ge1xuICAgIHJldHVybiAoYXdhaXQgZmluZERvY3VtZW50cyhcbiAgICAgIGNvbGxlY3Rpb25OYW1lLFxuICAgICAgaWQgPyB7IF9pZDogbmV3IE9iamVjdElEKGlkKSB9IDoge31cbiAgICApKSBhcyBOb3RlW11cbiAgfVxuICBzdGF0aWMgYXN5bmMgZGVsZXRlKGlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBkZWxldGVEb2N1bWVudChjb2xsZWN0aW9uTmFtZSwgeyBfaWQ6IG5ldyBPYmplY3RJRChpZCkgfSlcbiAgfVxuICBzdGF0aWMgYXN5bmMgdXBkYXRlKGlkOiBzdHJpbmcsIHRleHQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHVwZGF0ZURvY3VtZW50KGNvbGxlY3Rpb25OYW1lLCB7IF9pZDogbmV3IE9iamVjdElEKGlkKSB9LCB7IHRleHQgfSlcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./model/note.ts\n");

/***/ }),

/***/ "./pages/api/note.ts":
/*!***************************!*\
  !*** ./pages/api/note.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/note */ \"./model/note.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  switch (req.method) {\n    case 'GET':\n      res.status(200).json(await _model_note__WEBPACK_IMPORTED_MODULE_0__[\"Note\"].find());\n      break;\n\n    case 'POST':\n      const text = JSON.parse(req.body).text;\n      await new _model_note__WEBPACK_IMPORTED_MODULE_0__[\"Note\"](text).insert();\n      res.status(200).json({\n        message: 'ok'\n      });\n      break;\n\n    case 'PUT':\n      const body = JSON.parse(req.body);\n      await _model_note__WEBPACK_IMPORTED_MODULE_0__[\"Note\"].update(body.id, body.text);\n      res.status(200).json({\n        message: 'ok'\n      });\n      break;\n\n    case 'DELETE':\n      const id = JSON.parse(req.body);\n      await _model_note__WEBPACK_IMPORTED_MODULE_0__[\"Note\"].delete(id);\n      res.status(200).json({\n        message: 'ok'\n      });\n      break;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbm90ZS50cz8zODBlIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJOb3RlIiwiZmluZCIsInRleHQiLCJKU09OIiwicGFyc2UiLCJib2R5IiwiaW5zZXJ0IiwibWVzc2FnZSIsInVwZGF0ZSIsImlkIiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFFZSxzRUFBT0EsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDbEUsVUFBUUQsR0FBRyxDQUFDRSxNQUFaO0FBQ0UsU0FBSyxLQUFMO0FBQ0VELFNBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLE1BQU1DLGdEQUFJLENBQUNDLElBQUwsRUFBM0I7QUFDQTs7QUFDRixTQUFLLE1BQUw7QUFDRSxZQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVCxHQUFHLENBQUNVLElBQWYsRUFBcUJILElBQWxDO0FBQ0EsWUFBTSxJQUFJRixnREFBSixDQUFTRSxJQUFULEVBQWVJLE1BQWYsRUFBTjtBQUNBVixTQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFUSxlQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNBOztBQUNGLFNBQUssS0FBTDtBQUNFLFlBQU1GLElBQUksR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVdULEdBQUcsQ0FBQ1UsSUFBZixDQUFiO0FBQ0EsWUFBTUwsZ0RBQUksQ0FBQ1EsTUFBTCxDQUFZSCxJQUFJLENBQUNJLEVBQWpCLEVBQXFCSixJQUFJLENBQUNILElBQTFCLENBQU47QUFDQU4sU0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRVEsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFDQTs7QUFDRixTQUFLLFFBQUw7QUFDRSxZQUFNRSxFQUFFLEdBQUdOLElBQUksQ0FBQ0MsS0FBTCxDQUFXVCxHQUFHLENBQUNVLElBQWYsQ0FBWDtBQUNBLFlBQU1MLGdEQUFJLENBQUNVLE1BQUwsQ0FBWUQsRUFBWixDQUFOO0FBQ0FiLFNBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVRLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUFsQko7QUFvQkQsQ0FyQkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbm90ZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgTm90ZSB9IGZyb20gJy4uLy4uL21vZGVsL25vdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICBjYXNlICdHRVQnOlxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXdhaXQgTm90ZS5maW5kKCkpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ1BPU1QnOlxuICAgICAgY29uc3QgdGV4dCA9IEpTT04ucGFyc2UocmVxLmJvZHkpLnRleHRcbiAgICAgIGF3YWl0IG5ldyBOb3RlKHRleHQpLmluc2VydCgpXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdvaycgfSlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnUFVUJzpcbiAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKHJlcS5ib2R5KVxuICAgICAgYXdhaXQgTm90ZS51cGRhdGUoYm9keS5pZCwgYm9keS50ZXh0KVxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnb2snIH0pXG4gICAgICBicmVha1xuICAgIGNhc2UgJ0RFTEVURSc6XG4gICAgICBjb25zdCBpZCA9IEpTT04ucGFyc2UocmVxLmJvZHkpXG4gICAgICBhd2FpdCBOb3RlLmRlbGV0ZShpZClcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ29rJyB9KVxuICAgICAgYnJlYWtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/note.ts\n");

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/api/note.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/teraoka/app/note/pages/api/note.ts */"./pages/api/note.ts");


/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });