import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhoneHomeScreenDark.module.css";

const IPhoneHomeScreenDark: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer24Click = useCallback(() => {
    navigate("/iphone-14-25");
  }, [navigate]);

  return (
    <div className={styles.iphoneHomeScreenDark}>
      <div className={styles.homeScreenIphone}>
        <div className={styles.statusBar}>
          <div className={styles.time}>
            <div className={styles.time1}>9:41</div>
          </div>
          <img className={styles.levelsIcon} alt="" src="/levels1.svg" />
        </div>
        <div className={styles.appIcons}>
          <div className={styles.row6}>
            <div className={styles.row6App4}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img
                    className={styles.noAppIcon}
                    alt=""
                    src="/no-app-icon@2x.png"
                  />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName}>App Name</div>
            </div>
            <div className={styles.row6App3}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img
                    className={styles.noAppIcon}
                    alt=""
                    src="/no-app-icon2@2x.png"
                  />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName}>App Name</div>
            </div>
            <div className={styles.row6App2}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img
                    className={styles.noAppIcon}
                    alt=""
                    src="/no-app-icon3@2x.png"
                  />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName}>App Name</div>
            </div>
            <div className={styles.row6App1}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img
                    className={styles.noAppIcon}
                    alt=""
                    src="/no-app-icon@2x.png"
                  />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName}>App Name</div>
            </div>
          </div>
          <div className={styles.row5}>
            <div className={styles.row5App4}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img
                    className={styles.noAppIcon}
                    alt=""
                    src="/no-app-icon@2x.png"
                  />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName}>App Name</div>
            </div>
            <div className={styles.row5App3}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img
                    className={styles.noAppIcon}
                    alt=""
                    src="/no-app-icon2@2x.png"
                  />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName}>App Name</div>
            </div>
            <div className={styles.row5App2}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img
                    className={styles.noAppIcon}
                    alt=""
                    src="/no-app-icon3@2x.png"
                  />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName}>App Name</div>
            </div>
            <div className={styles.row6App1}>
              <div className={styles.frame}>
                <div className={styles.appIcon7}>
                  <img
                    className={styles.noAppIcon}
                    alt=""
                    src="/no-app-icon@2x.png"
                  />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName7}>My Vélo</div>
            </div>
          </div>
          <div className={styles.row4}>
            <div className={styles.row6App4}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img
                    className={styles.noAppIcon}
                    alt=""
                    src="/settings@2x.png"
                  />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName7}>Settings</div>
            </div>
            <div className={styles.row6App3}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img
                    className={styles.noAppIcon}
                    alt=""
                    src="/wallet@2x.png"
                  />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName7}>Wallet</div>
            </div>
            <div className={styles.row6App2}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img
                    className={styles.noAppIcon}
                    alt=""
                    src="/health@2x.png"
                  />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName7}>Health</div>
            </div>
            <div className={styles.row6App1}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img className={styles.noAppIcon} alt="" src="/maps@2x.png" />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName7}>Maps</div>
            </div>
          </div>
          <div className={styles.row3}>
            <div className={styles.row3App4}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img
                    className={styles.noAppIcon}
                    alt=""
                    src="/app-store@2x.png"
                  />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName7}>App Store</div>
            </div>
            <div className={styles.row3App3}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img
                    className={styles.noAppIcon}
                    alt=""
                    src="/podcasts@2x.png"
                  />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName7}>Podcasts</div>
            </div>
            <div className={styles.row6App2}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img className={styles.noAppIcon} alt="" src="/tv@2x.png" />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName7}>TV</div>
            </div>
            <div className={styles.row6App1}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img className={styles.noAppIcon} alt="" src="/news@2x.png" />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName7}>News</div>
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.row3App4}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img
                    className={styles.noAppIcon}
                    alt=""
                    src="/clock@2x.png"
                  />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName7}>Clock</div>
            </div>
            <div className={styles.row3App3}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img
                    className={styles.noAppIcon}
                    alt=""
                    src="/reminders@2x.png"
                  />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName7}>Reminders</div>
            </div>
            <div className={styles.row6App2}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img
                    className={styles.noAppIcon}
                    alt=""
                    src="/notes@2x.png"
                  />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName7}>Notes</div>
            </div>
            <div className={styles.row6App1}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img className={styles.noAppIcon} alt="" src="/mail@2x.png" />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName7}>Mail</div>
            </div>
          </div>
          <div className={styles.row1}>
            <div className={styles.row3App4}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img
                    className={styles.noAppIcon}
                    alt=""
                    src="/camera@2x.png"
                  />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName7}>Camera</div>
            </div>
            <div className={styles.row3App3}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img
                    className={styles.noAppIcon}
                    alt=""
                    src="/photos@2x.png"
                  />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName7}>Photos</div>
            </div>
            <div className={styles.row1App2}>
              <div className={styles.frame}>
                <div className={styles.appIcon22}>
                  <div className={styles.date}>6</div>
                  <b className={styles.day}>MON</b>
                </div>
                <div className={styles.badge44}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName22}>Calendar</div>
            </div>
            <div className={styles.row6App1}>
              <div className={styles.frame}>
                <div className={styles.appIcon}>
                  <img
                    className={styles.noAppIcon}
                    alt=""
                    src="/facetime@2x.png"
                  />
                </div>
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                  <div className={styles.number}>2</div>
                </div>
              </div>
              <div className={styles.appName7}>FaceTime</div>
            </div>
          </div>
        </div>
        <div className={styles.searchField}>
          <div className={styles.search}>􀊫 Search</div>
        </div>
        <div className={styles.dock}>
          <div className={styles.background}>
            <div className={styles.frame}>
              <div className={styles.appIcon}>
                <img className={styles.noAppIcon} alt="" src="/phone@2x.png" />
              </div>
              <div className={styles.badge}>
                <div className={styles.badge1} />
                <div className={styles.number}>2</div>
              </div>
            </div>
            <div className={styles.frame}>
              <div className={styles.appIcon}>
                <img className={styles.noAppIcon} alt="" src="/safari@2x.png" />
              </div>
              <div className={styles.badge}>
                <div className={styles.badge1} />
                <div className={styles.number}>2</div>
              </div>
            </div>
            <div className={styles.frame}>
              <div className={styles.appIcon}>
                <img
                  className={styles.noAppIcon}
                  alt=""
                  src="/messages@2x.png"
                />
              </div>
              <div className={styles.badge}>
                <div className={styles.badge1} />
                <div className={styles.number}>2</div>
              </div>
            </div>
            <div className={styles.frame}>
              <div className={styles.appIcon}>
                <img className={styles.noAppIcon} alt="" src="/music@2x.png" />
              </div>
              <div className={styles.badge}>
                <div className={styles.badge1} />
                <div className={styles.number}>2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame24} onClick={onFrameContainer24Click}>
        <div className={styles.appIcon}>
          <div className={styles.tv} />
        </div>
        <div className={styles.badge} />
        <img className={styles.logomy1Icon} alt="" src="/logomy-1@2x.png" />
      </div>
    </div>
  );
};

export default IPhoneHomeScreenDark;
