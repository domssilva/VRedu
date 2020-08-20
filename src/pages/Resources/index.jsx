import React from 'react';

import TableCol from '../../components/TableCol';
import TableRow from '../../components/TableRow';
import { FaDiscord, FaMicrophone, FaGithub, FaBookOpen, FaCommentAlt, FaChalkboardTeacher, FaCode } from 'react-icons/fa';
import discords from '../../data/discords.data';
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
              <a href="#programming">programming</a>
            </li>
            <li>
              <a href="#lectures">lectures</a>
            </li>
            <li>
              <a href="#repos">github</a>
            </li>
          </ul>
      </section>

      <section className="container">
        <div className="container__row">
          <h3 className="container__row-title" id="programming">
            <span>programming</span>
            <FaCode className="icon"/>
          </h3>
          <div className='container__row-tables'>
            <TableCol title='Game Engine'>
              <TableRow type='text' text='Unreal Engine'/>  
              <TableRow type='text' text='Unity'/>  
              <TableRow type='text' text='Godot'/>  
            </TableCol>
            <TableCol title='Main Language'>
              <TableRow type='link' link='https://en.wikipedia.org/wiki/C%2B%2B' text='C++'/>
              <TableRow type='link' link='https://en.wikipedia.org/wiki/C_Sharp_(programming_language)' text='C#'/>
              <TableRow type='link' link='https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/gdscript_advanced.html' text='GDScript'/>
            </TableCol>
            <TableCol title='Documentation'>
              <TableRow type='link' link='https://docs.unrealengine.com/en-US/index.html' text='index'/>
              <TableRow type='link' link='https://docs.unity3d.com/Manual/index.html' text='index'/>
              <TableRow type='link' link='https://docs.godotengine.org/en/stable/index.html' text='index'/>
            </TableCol>
          </div>          
          <div className='container__row-tables mt'>
          <TableCol title='Introductory Youtube Playlists'>
              <TableRow type='link' link='https://www.youtube.com/playlist?list=PLHSMxXn4v-aGhuRxxSBVPqykMjDiRyGrJ' text='Unreal Engine 4'/>
              <TableRow type='link' link='https://www.youtube.com/playlist?list=PLPV2KyIb3jR5QFsefuO2RlAgWEz6EvVi6' text='Unity3d'/>
              <TableRow type='link' link='https://www.youtube.com/playlist?list=PLsk-HSGFjnaFwmOFrfD4gQQqvgvEUielY' text='Godot3'/>
            </TableCol>
          <TableCol title='VR Playlists'>
            <TableRow type='link' link='https://www.youtube.com/playlist?list=PLZlv_N0_O1gZaB0IgQEnO9WOXYRx3Puvo' text='AR &amp; VR Unreal Engine'/>
            <TableRow type='link' link='https://www.youtube.com/playlist?list=PLrk7hDwk64-a_gf7mBBduQb3PEBYnG4fU' text='Unity XR toolkit'/>
            <TableRow type='link' link='https://www.youtube.com/playlist?list=PLe63S5Eft1KYGqgkx9I70vfWmvvOZ7apF' text='Godot Desktop VR tutorials'/>
            </TableCol>
          </div>          
        </div>
      
        <div className="container__row">
          <h3 className="container__row-title" id="podcasts">
            <span>podcasts</span>
            <FaMicrophone className="icon"/>
            </h3>
          <div className="container__row-tables">
            <TableCol title='podcasts'>
              <TableRow type='link' link='http://voicesofvr.com/' text='voiceosofvr'/>
              <TableRow type='link' link='https://vrscout.com/podcast/' text='vrscout'/>
              <TableRow type='link' link='http://www.revvrstudios.com/' text='revvrstudios'/>
              <TableRow type='link' link='https://www.youtube.com/channel/UCD_Hu0Hnf7lFyPzeYgy12jQ' text='FReality'/>
              <TableRow type='link' link='https://www.thevrara.com/podcast' text='Everything VR &amp; AR'/>
            </TableCol>
          </div>
        </div>
      
        <div className="container__row">
          <h3 className="container__row-title" id="documents">
            <span>free documents</span>
            <FaBookOpen className="icon"/>
          </h3>
          <div className="container__row-tables">
            <TableCol title="books &amp; pdf's">
              <TableRow type='link' link='https://livi.link/entering-metaverse-pdf' text="Guide to working in AR/VR"/>
              <TableRow type='link' link='http://vr.cs.uiuc.edu/vrbook.pdf' text='Virtual Reality - Steven M. LaValle'/>
              <TableRow type='link' link='https://epicgames.ent.box.com/s/n12ixy53l8cknz73npimsr54frkvm72c' text="Creator's Field guide to emerging careers in interactive 3D"/>
              <TableRow type='link' link='https://ec.europa.eu/futurium/en/system/files/ged/vr_ecosystem_eu_report_0.pdf' text="European VR's ecosystem report"/>
            </TableCol>
          </div>
        </div>

        <div className="container__row">
          <h3 className="container__row-title" id="lectures">
            <span>Lectures</span>
            <FaChalkboardTeacher className="icon"/>
          </h3>
          <div className="container__row-tables">
            <TableCol title='Youtube Playlist'>
              <TableRow type='link' link='https://www.youtube.com/playlist?list=PLbMVogVj5nJSyt80VRXYC-YrAvQuUb6dh' text='Virtual Reality by Prof Steven LaValle'/>
              <TableRow type='link' link='https://www.youtube.com/playlist?list=PL_w_qWAQZtAZhtzPI5pkAtcUVgmzdAP8g' text='Computer Graphics'/>
              <TableRow type='link' link='https://www.youtube.com/playlist?list=PLWKjhJtqVAbluXJKKbCIb4xd7fcRkpzoz' text='CS50 Introduction to game development'/>
              <TableRow type='link' link='https://www.youtube.com/playlist?list=PL8bmgwX9eBPGUZXoy3SVplvJMiHkzP8T_' text='Research and Talks about VR and MR'/>
            </TableCol>
            <TableCol title='Institute'>
              <TableRow type='text' text='IITM &amp; UIUC'/>
              <TableRow type='text' text='UC Davis'/>
              <TableRow type='text' text='Harvard'/>
              <TableRow type='text' text='UW Reality Lab'/>
            </TableCol>
            <TableCol title='website'>
              <TableRow type='link' link='https://nptel.ac.in/content/syllabus_pdf/106106138.pdf' text='Syllabus'/>
              <TableRow type='link' link='https://www.cs.ucdavis.edu/~ma/ECS175/syllabus.html' text='Syllabus'/>
              <TableRow type='link' link='https://cs50.harvard.edu/games/2018/' text='cs50 opencourse'/>
              <TableRow type='link' link='https://realitylab.uw.edu/components/lectures.html' text='Reality lab lectures'/>
            </TableCol>
          </div>
        </div>

        <div className="container__row">
          <h3 className="container__row-title" id="communities">
            <span>communities</span>
            <FaCommentAlt className="icon"/>
          </h3>
          <div className="container__row-tables">
            <TableCol title='discord'>
                {
                  discords.map(server => (
                    <TableRow type='svg-link' link={server.invite} text={server.name}>
                      <FaDiscord/>
                    </TableRow>
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
              <TableRow type='link' link='https://www.reddit.com/r/learnVRdev/' text='r/learnVRdev'/>
              <TableRow/>
              <TableRow/>
              <TableRow/>
              <TableRow/>
            </TableCol>
          </div>
        </div>

        <div className="container__row">
          <h3 className="container__row-title" id="repos">
            <span>github repos</span>
            <FaGithub className="icon"/>
          </h3>
          <div className="container__row-tables">
            <TableCol title='useful repositories'>
                <TableRow type='link' link='https://github.com/misslivirose/learnvr' text='learnvr'/>
                <TableRow type='link' link='https://github.com/googlevr/gvr-unity-sdk' text='Google VR SDK for Unity'/>
                <TableRow type='link' link='https://github.com/Corysia/Unity-Oculus-Example' text='Unity-Oculus-Example'/>
                <TableRow type='link' link='https://github.com/ValveSoftware/openvr' text='OpenVR SDK'/>
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
