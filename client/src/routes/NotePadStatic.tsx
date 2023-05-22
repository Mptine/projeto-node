import { api } from "../api/api";
import { useState, useEffect } from "react";
import { NoteStatic } from "../components/NoteStatic";
import ClipLoader from "react-spinners/ClipLoader";
import React from "react";
import { Notepad } from "../../../shared/types";
import { useParams, useSearchParams } from "react-router-dom";
import { createUrlParams } from "../createUrlParams";
import { config } from "../config";
import { getNotepads } from "../api/getNotepads";

const pageSize = config.pageSize;
const defaultNotepadList = {
  count: 0,
  notepads: [] as Notepad[],
};

export function NotePadStatic() {
  const [noteData, setNoteData] = useState(defaultNotepadList);
  const params = useParams();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || undefined;
  const orderBy = searchParams.get("order_by") || undefined;
  const direction = searchParams.get("direction") || undefined;
  const pageParams = createUrlParams({ search });
  const page = params.page === undefined ? 1 : +params.page;
  const pageCount = Math.ceil(noteData.count / pageSize);
  const limit = pageSize;
  const offset = pageSize * (page - 1);

  useEffect(() => {
    getNotepads({ limit, offset, search, direction, order_by: orderBy }).then(
      (noteData) => setNoteData(noteData)
    );
  }, [params]);

  return <NoteStatic notepads={noteData.notepads} />;
}
