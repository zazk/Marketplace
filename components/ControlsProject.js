import React from 'react';
import Link from 'next/link';
import { Mixpanel } from '../utils/mixpanel';

function ControlsProject({ id, items, data }) {
  const prevdata = parseInt(id) - 1;
  const prev = prevdata < 0 ? items - 1 : prevdata;

  const nextdata = parseInt(id) + 1;
  const next = nextdata >= items ? 0 : nextdata;

  function trackProjectNavigation(navigation, projectNumber) {
    if (user) {
      Mixpanel.identify(user.id);
    }
    Mixpanel.track('Project Navigation', {
      navigation: navigation,
      projectId: projectNumber,
    });
  }

  return (
    <div className="controls">
      <div className="content">
        <div className="flex">
          <Link href={`/pdp?id=${prev}`} onClick={() => trackProjectNavigation('prev', prev)}>
            <a className="control-item prev">
              <h5>{data[prev].title}</h5>
              <p>
                <img src="/static/iconos/icon-project-prev.svg" width="12" alt="" />
                Previous project
              </p>
            </a>
          </Link>
          <Link href={`/pdp?id=${next}`} onClick={() => trackProjectNavigation('prev', next)}>
            <a className="control-item next">
              <h5>{data[next].title}</h5>
              <p>
                Next project <img src="/static/iconos/icon-project-next.svg" width="12" alt="" />
              </p>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .controls {
            overflow: hidden;
            &.content {
              padding: 0;
            }
          }
          .control-item {
            height: 212px;
            width: 50%;
            box-sizing: border-box;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            font-size: 16px;
            font-style: italic;
            background-color: #d8d8d8;
            color: #4a4a4a;
            text-decoration: none;
            position: relative;
            padding: 0 55px;
            h5,
            p {
              margin: 0;
            }
            h5 {
              color: #fff;
              font-weight: 700;
              font-family: 'Work Sans', sans-serif;
              margin-bottom: 10px;
              font-size: 16px;
            }
            p {
              color: #17b363;
              font-size: 16px;
              font-weight: 500;
            }
            &:hover {
              p {
                text-decoration: underline;
              }
            }
            &:last-child {
              background-color: rgba(216, 216, 216, 0.3);
            }
            &.prev,
            &.next {
              background-color: rgba(3, 9, 34, 0.91);
              &:before {
                content: '';
                position: absolute;
                width: 100vw;
                height: 100%;
                right: 100%;
                display: block;
                bottom: 0;
                z-index: -1;
                background-color: rgba(3, 9, 34, 0.91);
              }
            }
            &.prev {
              img {
                margin-right: 10px;
              }
            }
            &.next {
              background-color: rgba(3, 9, 34, 0.95);
              align-items: flex-end;
              img {
                margin-left: 10px;
              }
              h5 {
                text-align: right;
              }
              &:before {
                content: '';
                left: 100%;
                right: inherit;
                background-color: rgba(3, 9, 34, 0.95);
              }
            }
            @media screen and (max-width: 640px) {
              padding: 0 10px;
              h5,
              p {
                font-size: 14px;
              }
            }
          }
        `}
      </style>
    </div>
  );
}
export default ControlsProject;
