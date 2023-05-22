import express from "express";
import * as notepadService from "./notepad.service";

export const notepadController = express.Router();

//GET method for all notes
notepadController.get("/", (req, res) => {
  const limit = req.query.limit ? Number(req.query.limit) : undefined;
  const offset = req.query.offset ? Number(req.query.offset) : undefined;
  const order_by = req.query.order_by as string | undefined;
  const direction = req.query.direction as string | undefined;
  const search =
    req.query.search !== undefined ? req.query.search.toString() : undefined;
  const notepads = notepadService.findNotepads({
    limit,
    offset,
    search,
    order_by,
    direction,
  });

  //200 OK: The request has succeeded
  res.status(200).json(notepads);
});

// GET method for a specific note, by id
notepadController.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const notepad = notepadService.findNotepadById(id);
  if (notepad === null) {
    //404 Not Found
    res.sendStatus(404);
  } else {
    //200 OK: The request has succeeded
    res.status(200).json(notepad);
  }
});

// POST a new note
notepadController.post("/", (req, res) => {
  const response = notepadService.createNotepad(req.body);

  //201 CREATED: the request has successfly created the object
  res.status(201).json(response);
});

//GET method for all comments of a specific note, definide by it's id.
notepadController.get("/:id/comments", (req, res) => {
  const id = Number(req.params.id);
  const response = notepadService.findNotepadCommentsById(id);

  //200 OK: The request has succeeded
  res.status(200).json(response);
});

//PUT(replace, overwright) method for a specific note, by id
notepadController.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const response = notepadService.overwriteNotepadById(id, req.body);

  //200 OK: The request has succeeded
  res.status(200).json(response);
});

//PATCH(partial edition)
notepadController.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const response = notepadService.updateNotepadById(id, req.body);

  //200 OK: The request has succeeded
  res.status(200).json(response);
});

//Delete(Do i really need to explain this one?) for method for a specific note, by id
notepadController.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const response = notepadService.deleteNotepadById(id);

  //200 OK: The request has succeeded
  res.status(200).json(response);
});
