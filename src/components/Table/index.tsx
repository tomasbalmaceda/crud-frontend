import { useEffect, useState, useContext, Fragment } from "react";

import * as C from "./styles";

import { api } from "../../helpers/api";

import { ReadOnlyRow } from "../ReadOnlyRow";
import { EditableRow } from "../EditableRow";

import { ContactType } from "../../types/ContactType";

import { LoadingContext } from "../../contexts/LoadingContext";

import {
  Table as MuiTable,
  TableBody as MuiTableBody,
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
} from "@mui/material";

export const Table = () => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const [editableModeId, setEditableModeId] = useState("");

  const [contactsData, setContactsData] = useState<ContactType[]>([]);

  useEffect(() => {
    if (isLoading) {
      api.getAllContacts().then((response) => {
        setContactsData(response);
        setIsLoading(false);
      });
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <C.Progress />
      ) : (
        <>
          {contactsData.length > 0 && (
            <div>
              <C.Container>
                <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
                  <MuiTableHead>
                    <MuiTableRow>
                      <C.Cell>Name</C.Cell>
                      <C.Cell>Address</C.Cell>
                      <C.Cell>Phone Number</C.Cell>
                      <C.Cell>Email</C.Cell>
                      <C.Cell>Actions</C.Cell>
                    </MuiTableRow>
                  </MuiTableHead>
                  <MuiTableBody>
                    {contactsData.map((contact, index) => (
                      <Fragment key={index}>
                        {editableModeId === contact._id ? (
                          <EditableRow
                            contact={contact}
                            setEditableModeId={setEditableModeId}
                          />
                        ) : (
                          <ReadOnlyRow
                            contact={contact}
                            setEditableModeId={setEditableModeId}
                          />
                        )}
                      </Fragment>
                    ))}
                  </MuiTableBody>
                </MuiTable>
              </C.Container>
            </div>
          )}
        </>
      )}
    </>
  );
};
