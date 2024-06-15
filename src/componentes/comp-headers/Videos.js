import Button from "react-bootstrap/Button";
import React from "react";
import ReactPlayer from "react-player";
import { FaYoutube } from "react-icons/fa";
export default function Videos() {
  return (
    <div>
      <h1 className="text-center bg-light bg-gradient font-monospace p-3 text-dark mt-5 pt-5">
        VIDEOS
      </h1>
      <div className="py-4 d-flex justify-content-center">
        <ReactPlayer
          className="py-4"
          url="https://www.youtube.com/watch?v=W0wub_GapUs"
          controls
        />
      </div>
      <div className="text-center">
        <Button
          variant="success"
          className="justify-content-center"
          href="https://www.youtube.com/channel/UCQd2id4-QCuBSzqgBrkpulg"
          target="_blank"
          style={{ margin: 10 }}
        >
          Ver mas videos <br />
          <a
            href="https://www.youtube.com/channel/UCQd2id4-QCuBSzqgBrkpulg"
            className="text-white"
          >
            <FaYoutube style={{ width: 30, height: "auto" }} />
          </a>
        </Button>
      </div>
    </div>
  );
}
