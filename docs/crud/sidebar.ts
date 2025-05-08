import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  crudsidebar: [
    {
      type: "doc",
      id: "crud/crud-api-with-swagger",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "crud/get-all-items",
          label: "Get all items",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "crud/create-a-new-item",
          label: "Create a new item",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "crud/get-item-by-id",
          label: "Get item by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "crud/update-an-item-by-id",
          label: "Update an item by ID",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "crud/delete-an-item-by-id",
          label: "Delete an item by ID",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.crudsidebar;
