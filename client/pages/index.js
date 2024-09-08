import React from "react";
import home from "@/styles/Home.module.css";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@nextui-org/table";
import Link from "next/link";
const Index = () => {
  return (
    <div>
      <section className={home.main_body}>
        <div className={`${home.sub_body} container`}>
          <h1 className={`${home.heading1}`}>നന്ദനം</h1>{" "}
          {/* <h1 className={`${home.heading1}`}>ashagvhsj</h1>{" "} */}
          <Link href={'/addperson' } className={home.addperson_btn}>Add User</Link>
          <div className={home.main_body_search_sec}>
            <input type="text" className={home.main_body_search_input} placeholder="തിരയുക" />
            <button className={home.main_body_search_btn}>Search</button>

          </div>

          <Table
            aria-label="Example static collection table"
            className={home.list_sec}
          >
            <TableHeader className={home.list_heading_sec}>
              <TableColumn>Book Id</TableColumn>
              <TableColumn>പേര്</TableColumn>
              <TableColumn>പണം തന്നത്</TableColumn>
              <TableColumn>പണം കൊടുത്തത്</TableColumn>
              <TableColumn>തിരുത്തുക</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1" className={home.list_data_sec}>
                <TableCell>01 </TableCell>
                <TableCell>AmaljithAmaljithAmaljithAmaljith M K</TableCell>
                <TableCell>500</TableCell>
                <TableCell>400</TableCell>
                <TableCell>400</TableCell>
              </TableRow>
              <TableRow key="1" className={home.list_data_sec}>
                <TableCell>01 </TableCell>
                <TableCell>AmaljithAmaljithAmaljithAmaljith M K</TableCell>
                <TableCell>500</TableCell>
                <TableCell>400</TableCell>
                <TableCell>400</TableCell>
              </TableRow>
              <TableRow key="1" className={home.list_data_sec}>
                <TableCell>01 </TableCell>
                <TableCell>AmaljithAmaljithAmaljithAmaljith M K</TableCell>
                <TableCell>500</TableCell>
                <TableCell>400</TableCell>
                <TableCell>400</TableCell>
              </TableRow>
              <TableRow key="1" className={home.list_data_sec}>
                <TableCell>01 </TableCell>
                <TableCell>AmaljithAmaljithAmaljithAmaljith M K</TableCell>
                <TableCell>500</TableCell>
                <TableCell>400</TableCell>
                <TableCell>400</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default Index;
