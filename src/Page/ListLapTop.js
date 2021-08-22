import React, { useState } from "react";
import { Table, Tag, Space, Button, Input, Form } from "antd";
import { Modal } from "antd";
// import { laptops } from "../data/LapTop";

// {
//     id=9,
//     quantity:13,
//     laptopBrandId=2,
//     name="Asus TUF Gaming FX506LH i5 10300H (HN002T)",
//     price:"39000000",
//     description:"Màn hình: 15.6, Full HD, 144Hz CPU: Intel Core i5, 10300H, 2.50 GHz Card: NVIDIA GeForce GTX 1650 4 GB Pin: 3-cell, 48WM.Hình: 15.6, Full HD CPU: Intel Core i3, 1115G4, 3GHz Card: Intel UHD Graphics Pin: 3-cell"
// },
export default function ListLapTop({
  laptops,
  editedLaptop,
  setLaptopEdit,
  setLaptops,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handEditLapTop = (value) => {
    console.log(value);
    value.id = editedLaptop.id;
    setIsModalVisible(false);
    let laptopArr = [...laptops];
    let index = laptopArr.findIndex((item) => item.id === editedLaptop.id);
    if (index !== -1) {
      console.log("index eidt", index);
      laptopArr[index] = { ...value };
      console.log(laptopArr[index]);

      console.log("yess", laptopArr);
      setLaptops([...laptopArr]);
    }
  };
  const handleDeletedLapTop = (id) => {
    let laptopArr = [...laptops];
    let index = laptopArr.findIndex((item) => item.id === id);
    if (index !== -1) {
      console.log("index delted", index);
      laptopArr.splice(index, 1);

      console.log("yess", laptopArr);
      setLaptops([...laptopArr]);
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (id) => <span className="font-medium flex-shrink-0">{id}</span>,
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (name) => (
        <span className="font-medium flex-shrink-0">{name}</span>
      ),
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Thông tin",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Số Lượng",
      key: "quantity",
      dataIndex: "quantity",
    },
    {
      title: "Xoá",
      key: "delete",
      render: (text, record) => (
        <Button
          onClick={() => {
            handleDeletedLapTop(record.id);
          }}
          size="middle"
          type="dashed"
          danger
        >
          Xoá
        </Button>
      ),
    },
    {
      title: "Chỉnh sửa",
      key: "edit",
      render: (text, record) => {
        // console.log("record", record.laptop);
        return (
          <Button
            type="primary"
            size="middle"
            onClick={() => {
              setLaptopEdit({ ...record.laptop });
              console.log("record.laptop", record.laptop);
              showModal();
            }}
          >
            Chỉnh sửa
          </Button>
        );
      },
    },
  ];
  //   console.log("laap", laptops);
  const data = laptops.map((item) => {
    return {
      id: item.id,
      laptop: item,
      name: item.name,
      price: item.price,
      description: item.description,
      quantity: item.quantity,
    };
  });
  console.log("editedLaptop", editedLaptop);
  return (
    <div className="w-full ">
      <Table columns={columns} dataSource={data} />
      <Modal
        title="Chỉnh sửa thông tin laptop"
        visible={isModalVisible}
        footer={null}
        className="w-2/3 p-5"
      >
        <Form
          name="basic"
          className="w-full"
          initialValues={{ remember: true }}
          onFinish={handEditLapTop}
        >
          <Form.Item name="name">
            <div className="flex items-center justify-between w-full space-x-3 my-2">
              <span className="w-32 font-medium flex-shrink-0">Tên</span>
              <Input className="p-3" defaultValue={editedLaptop.name} />
            </div>
          </Form.Item>
          <Form.Item name="price">
            <div className="flex items-center justify-between w-full space-x-3 my-2">
              <span className="w-32 font-medium flex-shrink-0">Giá</span>
              <Input className="p-3" defaultValue={editedLaptop.price} />
            </div>
          </Form.Item>
          <Form.Item name="description">
            <div className="flex items-center justify-between w-full space-x-3 my-2">
              <span className="w-32 font-medium flex-shrink-0">Mô tả</span>
              <Input className="p-3" defaultValue={editedLaptop.description} />
            </div>
          </Form.Item>

          <Form.Item name="quantity">
            <div className="flex items-center justify-between w-full space-x-3 my-2">
              <span className="w-32 font-medium flex-shrink-0">Số lượng</span>
              <Input className="p-3" defaultValue={editedLaptop.quantity} />
            </div>
          </Form.Item>

          <div className="flex justify-end items-center space-x-3">
            <Form.Item>
              <Button onClick={handleOk} type="default">
                Huỷ
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Ok
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
}
