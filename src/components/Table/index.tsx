import { useEffect, useState, useContext, Fragment } from "react";

import * as C from "./styles";

import { api } from "../../helpers/api";

import { ReadOnlyRow } from "../ReadOnlyRow";
import { EditableRow } from "../EditableRow";

import CircularProgress from "@mui/material/CircularProgress";

import { UserType } from "../../types/UserType";

import { DataContext } from "../../contexts/DataContext";

export const Table = () => {
  const { loading, setLoading } = useContext(DataContext);

  const [editableModeId, setEditableModeId] = useState("");

  const [contactsData, setContactsData] = useState<UserType[]>([]);

  useEffect(() => {
    if (loading) {
      api.getAllContacts().then((response) => {
        setContactsData(response);
        setLoading(false);
      });
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {contactsData.length > 0 && (
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
                  {contactsData.map((item, index) => (
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
