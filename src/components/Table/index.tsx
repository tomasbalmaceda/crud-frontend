import { useEffect, useState, useContext, Fragment } from "react";

import * as C from "./styles";

import { api } from "../../helpers/api";

import { ReadOnlyRow } from "../ReadOnlyRow";
import { EditableRow } from "../EditableRow";

import { UserType } from "../../types/UserType";

import { DataContext } from "../../contexts/DataContext";

import Tables from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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
        <C.StyledLoading />
      ) : (
        <>
          {contactsData.length > 0 && (
            <div>
              <C.StyledTable>
                <Tables sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <C.StyledCell>Name</C.StyledCell>
                      <C.StyledCell>Address</C.StyledCell>
                      <C.StyledCell>Phone Number</C.StyledCell>
                      <C.StyledCell>Email</C.StyledCell>
                      <C.StyledCell>Actions</C.StyledCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
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
                  </TableBody>
                </Tables>
              </C.StyledTable>
            </div>
          )}
        </>
      )}
    </>
  );
};
