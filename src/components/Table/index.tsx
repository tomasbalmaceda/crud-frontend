import { useEffect, useState, useContext, Fragment } from "react";

import * as C from "./styles";

import { Context } from "../../contexts/Context";

import { api } from "../../helpers/api";

import { ReadOnlyRow } from "../ReadOnlyRow";

import { EditableRow } from "../EditableRow";

import CircularProgress from "@mui/material/CircularProgress";

export const Table = () => {
  const { state, dispatch } = useContext(Context);

  const [editableModeId, setEditableModeId] = useState("");

  useEffect(() => {
    api.getAllContacts().then((response) => {
      dispatch({
        type: "CHANGE_CRUD_DATA",
        payload: {
          crud: response,
        },
      });
      dispatch({
        type: "CHANGE_LOADING_DATA",
        payload: {
          loadingData: false,
        },
      });
    });
  }, [state.loading.loadingData]);

  return (
    <>
      {state.loading.loadingData ? (
        <CircularProgress />
      ) : (
        <>
          {state.crud.userData.length > 0 && (
            <C.Container>
              <C.Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {state.crud.userData.map((item, index) => (
                    <Fragment key={index}>
                      {editableModeId === item._id ? (
                        <EditableRow
                          item={item}
                          setEditableModeId={setEditableModeId}
                        />
                      ) : (
                        <ReadOnlyRow
                          item={item}
                          setEditableModeId={setEditableModeId}
                        />
                      )}
                    </Fragment>
                  ))}
                </tbody>
              </C.Table>
            </C.Container>
          )}
        </>
      )}
    </>
  );
};
