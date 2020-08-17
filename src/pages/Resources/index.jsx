import React from 'react';

import discords from '../../data/discords.data';
import {ReactComponent as discordIcon} from '../../media/discord-icon.svg';

import TableCol from '../../components/TableCol';
import './styles.scss';

const Resources = () => {
  return (
    <main>
      <section className="index">
          <ul>
            <li>
              <a href="#podcasts">Podcasts</a>
            </li>
            <li>
              <a href="#documents">Documents</a>
            </li>
            <li>
              <a href="#communities">Communities</a>
            </li>
            <li>
              <a href="#development">development</a>
            </li>
            <li>
              <a href="#lectures">lectures</a>
            </li>
          </ul>
      </section>

      <section className="container">
        <div className="container__row">
          <h3 className="container__row-title" id="development">development</h3>
          <div className='container__row-tables'>
            <TableCol title='Game Engine'>
              <tr>
                <td>
                  <span>Unreal Engine</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Unity</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Godot</span>
                </td>
              </tr>
            </TableCol>
            <TableCol title='Main Language'>
              <tr>
                <td>
                  <a href='https://en.wikipedia.org/wiki/C%2B%2B' target='_blank' rel='noopener noreferrer'>C++</a>
                </td>
              </tr>
              <tr>
                <td>
                <a href='https://en.wikipedia.org/wiki/C_Sharp_(programming_language)' target='_blank' rel='noopener noreferrer'>C#</a>
                </td>
              </tr>
              <tr>
                <td>
                <a href='https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/gdscript_advanced.html' target='_blank' rel='noopener noreferrer'>GDScript</a>
                </td>
              </tr>
            </TableCol>
            <TableCol title='Documentation'>
              <tr>
                <td>
                  <a href='https://docs.unrealengine.com/en-US/index.html' target='_blank' rel='noopener noreferrer'>index</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='https://docs.unity3d.com/Manual/index.html' target='_blank' rel='noopener noreferrer'>index</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='https://docs.godotengine.org/en/stable/index.html' target='_blank' rel='noopener noreferrer'>index</a>
                </td>
              </tr>
            </TableCol>
          </div>          
          <div className='container__row-tables mt'>
          <TableCol title='Introductory Youtube Playlists'>
              <tr>
                <td>
                <a href='https://www.youtube.com/playlist?list=PLHSMxXn4v-aGhuRxxSBVPqykMjDiRyGrJ' target='_blank' rel='noopener noreferrer'>Unreal Engine 4</a>
                </td>
              </tr>
              <tr>
                <td>
                <a href='https://www.youtube.com/playlist?list=PLPV2KyIb3jR5QFsefuO2RlAgWEz6EvVi6' target='_blank' rel='noopener noreferrer'>Unity3d</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='https://www.youtube.com/playlist?list=PLsk-HSGFjnaFwmOFrfD4gQQqvgvEUielY' target='_blank' rel='noopener noreferrer'>Godot3</a>
                </td>
              </tr>
            </TableCol>
          <TableCol title='VR Playlists'>
              <tr>
                <td>
                <a href='https://www.youtube.com/playlist?list=PLZlv_N0_O1gZaB0IgQEnO9WOXYRx3Puvo' target='_blank' rel='noopener noreferrer'>AR &amp; VR Unreal Engine</a>
                </td>
              </tr>
              <tr>
                <td>
                <a href='https://www.youtube.com/playlist?list=PLrk7hDwk64-a_gf7mBBduQb3PEBYnG4fU' target='_blank' rel='noopener noreferrer'>Unity XR toolkit</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='https://www.youtube.com/playlist?list=PLe63S5Eft1KYGqgkx9I70vfWmvvOZ7apF' target='_blank' rel='noopener noreferrer'>Godot Desktop VR tutorials</a>
                </td>
              </tr>
            </TableCol>
          </div>          
        </div>
      
        <div className="container__row">
          <h3 className="container__row-title" id="podcasts">podcasts</h3>
          <div className="container__row-tables">
            <TableCol title='podcasts'>
              <tr>
                <td>
                  <a href='http://www.revvrstudios.com/' target='_blank' rel='noopener noreferrer'>revvrstudios</a>
                </td>
              </tr>
              <tr>
                <td>
                <a href='https://vrscout.com/podcast/' target='_blank' rel='noopener noreferrer'>vrscout</a>
                </td>
              </tr>
              <tr>
                <td>
                <a href='http://voicesofvr.com/' target='_blank' rel='noopener noreferrer'>voiceosofvr</a>
                </td>
              </tr>
              <tr>
                <td>
                <a href='https://www.youtube.com/channel/UCD_Hu0Hnf7lFyPzeYgy12jQ' target='_blank' rel='noopener noreferrer'>FReality</a>
                </td>
              </tr>
              <tr>
                <td>
                <a href='https://www.thevrara.com/podcast' target='_blank' rel='noopener noreferrer'>Everything VR &amp; AR</a>
                </td>
              </tr>
            </TableCol>
          </div>
        </div>
      
        <div className="container__row">
          <h3 className="container__row-title" id="documents">free documents</h3>
          <div className="container__row-tables">
            <TableCol title="books &amp; pdf's">
              <tr>
                <td>
                  <a href='https://ec.europa.eu/futurium/en/system/files/ged/vr_ecosystem_eu_report_0.pdf' target='_blank' rel='noopener noreferrer'>European VR's ecosystem report</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='http://vr.cs.uiuc.edu/vrbook.pdf' target='_blank' rel='noopener noreferrer'>Virtual Reality - Steven M. LaValle</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='http://www.morganclaypoolpublishers.com/catalog_Orig/samples/9781970001136_sample.pdf' target='_blank' rel='noopener noreferrer'>The VR book - Jason Jerald</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='https://epicgames.ent.box.com/s/n12ixy53l8cknz73npimsr54frkvm72c' target='_blank' rel='noopener noreferrer'>Creator's Field guide to emerging careers in interactive 3D</a>
                </td>
              </tr>
            </TableCol>
          </div>
        </div>

        <div className="container__row">
          <h3 className="container__row-title" id="lectures">lectures</h3>
          <div className="container__row-tables">
            <TableCol title='Youtube Playlist'>
              <tr>
                <td>
                  <a href='https://www.youtube.com/playlist?list=PLbMVogVj5nJSyt80VRXYC-YrAvQuUb6dh' target='_blank' rel='noopener noreferrer'>Virtual Reality by Prof Steven LaValle</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='https://www.youtube.com/playlist?list=PL_w_qWAQZtAZhtzPI5pkAtcUVgmzdAP8g' target='_blank' rel='noopener noreferrer'>Computer Graphics</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='https://www.youtube.com/playlist?list=PLWKjhJtqVAbluXJKKbCIb4xd7fcRkpzoz' target='_blank' rel='noopener noreferrer'>CS50 Introduction to game development</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='https://www.youtube.com/playlist?list=PL8bmgwX9eBPGUZXoy3SVplvJMiHkzP8T_' target='_blank' rel='noopener noreferrer'>Research and Talks about VR and MR</a>
                </td>
              </tr>
            </TableCol>
            <TableCol title='Institute'>
              <tr>
                <td>
                  <span>IITM &amp; UIUC</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>UC Davis</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Harvard</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>UW Reality Lab</span>
                </td>
              </tr>
            </TableCol>
            <TableCol title='website'>
              <tr>
                <td>
                  <a href='https://nptel.ac.in/content/syllabus_pdf/106106138.pdf' target='_blank' rel='noopener noreferrer'>Syllabus</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='https://www.cs.ucdavis.edu/~ma/ECS175/syllabus.html' target='_blank' rel='noopener noreferrer'>Syllabus</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='https://cs50.harvard.edu/games/2018/' target='_blank' rel='noopener noreferrer'>cs50 opencourse</a>
                </td>
              </tr>
              <tr>
                <td>
                 <a href='https://realitylab.uw.edu/components/lectures.html' target='_blank' rel='noopener noreferrer'>Reality lab lectures</a>
                </td>
              </tr>
            </TableCol>
          </div>
        </div>

        <div className="container__row">
          <h3 className="container__row-title" id="communities">communities</h3>
          <div className="container__row-tables">
            <TableCol title='discord'>
                {
                  discords.map(server => (
                    <tr>
                      <td>
                        <a href={server.invite} target='_blank' rel='noopener noreferrer'>
                          {server.name}
                          <discordIcon/>
                        </a>
                      </td>
                    </tr>
                  ))
                }
            </TableCol>
            <TableCol title='category'>
                {
                  discords.map(server => (
                    <tr>
                      <td>
                        <span>{server.category}</span>
                      </td>
                    </tr>
                  ))
                }
            </TableCol>
            <TableCol title='reddit'>
              <tr>
                <td>
                  <a href='https://www.reddit.com/r/learnVRdev/' target='_blank' rel='noopener noreferrer'>r/learnVRdev</a>
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                </td>
              </tr>
            </TableCol>
          </div>
        </div>

        <small>
          more servers at: <a href='https://docs.google.com/spreadsheets/d/1P11CeYRDlR5ak1GeXt3YqPS9HkaD_e9VwXG7y2cZ_KE/edit#gid=0' target='_blank' rel='noopener noreferrer'>discord spreadsheet</a>
        </small>

      </section>
    </main>
  );
}

export default Resources;
