import React from 'react';
import Link from 'next/link';
function ControlsProject({ id, items }) {
  const prevdata = parseInt(id) - 1;
  const prev = prevdata < 0 ? items - 1 : prevdata;

  const nextdata = parseInt(id) + 1;
  const next = nextdata >= items ? 0 : nextdata;

  return (
    <div className="controls content">
      <div className="flex">
        <Link href={`/?id=${prev}`}>
          <a className="control-item">Previous project</a>
        </Link>
        <Link href={`/?id=${next}`}>
          <a className="control-item">Next project</a>
        </Link>
      </div>
      <style jsx>
        {`
          .controls {
            &.content {
              padding: 0;
            }
          }
          .control-item {
            height: 212px;
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            font-style: italic;
            background-color: #d8d8d8;
            color: #4a4a4a;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
            &:last-child {
              background-color: rgba(216, 216, 216, 0.3);
            }
          }
        `}
      </style>
    </div>
  );
}
export default ControlsProject;
