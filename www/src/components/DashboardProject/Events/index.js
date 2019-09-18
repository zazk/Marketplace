import React from 'react';
import AsideTitle from '../AsideTitle';
import { EventTag, TimelineEvents, SidebarChecked, SidebarItem, WrapsEvents } from './style';

function Events() {
  return (
    <WrapsEvents>
      <AsideTitle text="upcoming events"></AsideTitle>
      <TimelineEvents className="spaces events-list">
        <SidebarItem>
          <SidebarChecked>
            <img src="/static/iconos/checked.svg" width="19" alt="" />
          </SidebarChecked>
          <h4>May 12</h4>
          <p>
            <em>Tree planting</em>
            <EventTag style={{ backgroundColor: `#bef8f1` }}>biomass ++</EventTag>
            <EventTag style={{ backgroundColor: `#b6f1d0` }}>biodiversity ++</EventTag>
          </p>
        </SidebarItem>
        <SidebarItem>
          <SidebarChecked>
            <img src="/static/iconos/checked.svg" width="19" alt="" />
          </SidebarChecked>
          <h4>May 17</h4>
          <p>
            <em>Tree planting</em>
            <EventTag style={{ backgroundColor: `#bef8f1` }}>biomass ++</EventTag>
            <EventTag style={{ backgroundColor: `#b6f1d0` }}>biodiversity ++</EventTag>
          </p>
        </SidebarItem>
        <SidebarItem>
          <SidebarChecked>
            <img src="/static/iconos/checked.svg" width="19" alt="" />
          </SidebarChecked>
          <h4>August 5</h4>
          <p>
            <em>Tree planting</em>
            <EventTag style={{ backgroundColor: `#bef8f1` }}>biomass ++</EventTag>
            <EventTag style={{ backgroundColor: `#b6f1d0` }}>biodiversity ++</EventTag>
          </p>
        </SidebarItem>
        <SidebarItem>
          <SidebarChecked>
            <img src="/static/iconos/checked.svg" width="19" alt="" />
          </SidebarChecked>
          <h4>September 16</h4>
          <p>
            <em>Tree planting</em>
            <EventTag style={{ backgroundColor: `#bef8f1` }}>biomass ++</EventTag>
            <EventTag style={{ backgroundColor: `#b6f1d0` }}>biodiversity ++</EventTag>
          </p>
        </SidebarItem>
      </TimelineEvents>
    </WrapsEvents>
  );
}
export default Events;
