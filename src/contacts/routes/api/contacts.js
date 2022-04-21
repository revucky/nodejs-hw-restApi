const express = require("express");
const {
  addContactValid,
  validatePut,
  validatePatch,
} = require("../../src/db/middlewares/validationMiddleware");

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} = require("../../../../models/contacts");

const router = express.Router();

router.get("/", listContacts);
router.get("/:contactId", getContactById);
router.post("/", addContactValid, addContact);
router.delete("/:contactId", removeContact);
router.put("/:contactId", validatePut, updateContact);
router.patch("/:contactId", validatePatch, updateStatusContact);

module.exports = router;