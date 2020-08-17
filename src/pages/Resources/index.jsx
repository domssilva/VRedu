import React from 'react';

import TableCol from '../../components/TableCol';
import './styles.scss';

const Resources = () => {
  return (
    <main>

      {/* div.todo will be CANCELLED */}
      <div className="todo">
        <p>I want to set a table-looking grid with all the resources I gathered</p>

        <ul>
          <li>roadmap</li>
          <li>ytb channels</li>
          <li>free books</li>
          <li>podcasts</li>
          <li>communities</li>
          <li>projects</li>
        </ul>
      </div>

      {/*
        <TableCol title='podcasts'>
          'http://www.revvrstudios.com/'
          'https://vrscout.com/podcast/'
          'http://voicesofvr.com/'
        </TableCol>
      */}
      
      <section className="container">
        <div className="container__row">
          <h3 className="container__row-title" id=""></h3>
          <div className="container__row-tables">
          </div>
        </div>
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
            <TableCol title='playlist'>
              <tr>
                <td>
                <a href='https://www.youtube.com/playlist?list=PLHSMxXn4v-aGhuRxxSBVPqykMjDiRyGrJ' target='_blank' rel='noopener noreferrer'>Introductory</a>
                </td>
              </tr>
              <tr>
                <td>
                <a href='https://www.youtube.com/playlist?list=PLPV2KyIb3jR5QFsefuO2RlAgWEz6EvVi6' target='_blank' rel='noopener noreferrer'>Introductory</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='https://www.youtube.com/playlist?list=PLsk-HSGFjnaFwmOFrfD4gQQqvgvEUielY' target='_blank' rel='noopener noreferrer'>Introductory</a>
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
        </div>
      </section>

    </main>

  )
}

export default Resources;
