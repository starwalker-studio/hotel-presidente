import { useState } from "react";
import { Button } from "../../../components/ui/button/Button";
import { SECTIONS } from "../ts/sections.env";
import style from "./Rooms.module.scss";

type Room = (typeof SECTIONS.ROOMS.LIST)[number];

export const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room>(
    SECTIONS.ROOMS.LIST[0],
  );

  return (
    <section className={style.rooms_section}>
      <div className={style.rooms_container}>
        <div className={style.rooms_wrapper}>
          <div className={style.rooms_content}>
            <div className={style.seccion_title}>
              <h2>{SECTIONS.ROOMS.TITLE}</h2>
              <p>{SECTIONS.ROOMS.SUB_TITLE}</p>
            </div>
            <div className={style.rooms_content_grid}>
              <div className={style.content_rooms_menu}>
                <ul>
                  {SECTIONS.ROOMS.LIST.map((r) => {
                    const isActive = r.id === selectedRoom.id;
                    return (
                      <li key={r.id}>
                        <button
                          type="button"
                          className={`${style.menu_item} ${isActive ? style.active : ""}`}
                          aria-current={isActive ? "true" : undefined}
                          onClick={() => setSelectedRoom(r)}
                        >
                          {r.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className={style.content_show_room}>
                <div className={style.room_img}>
                  <img
                    key={selectedRoom.id}
                    src={selectedRoom.img}
                    alt={selectedRoom.label}
                  />
                </div>
              </div>
              <div className={style.content_room_desc}>
                <h3>{selectedRoom.label}</h3>
                <p>{selectedRoom.desc}</p>
                <p>{selectedRoom.cap}</p>
                <span>{selectedRoom.price}</span>
                <hr className={style.divider} />
                <Button label={selectedRoom.button_label} variant="outline" />
              </div>
            </div>
            <div className={style.see_all}>
              <Button label={SECTIONS.ROOMS.SEE_ALL_BUTTON} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
