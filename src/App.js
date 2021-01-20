import React from 'react';
import './App.css';
import Landing from './components/landing'
import Resume from './components/resume'

function App() {
  return (
    <div class="docSlider">
      
      <section>
        <Landing />
    </section>
    <section>
        <Resume />
    </section>
    <section class="Intro">
        <div class="Outer">
            <div class="Inner">
                <h2>You Don't Need jQuery</h2>
                <p>So you don't have to worry about conflicts with other JavaScript libraries.</p>
                <p>You only need two files: CSS and JavaScript.</p>
            </div>
        </div>
    </section>

    <section class="Key">
        <div class="Outer">
            <div class="Inner">
                <h2>Support for key presses</h2>
                <p>The following key inputs are supported. Let's try it.</p>
                <p>Tab, Space, ArrowDown, ArrowUp, PageUp, PageDown, Home, End</p>
            </div>
        </div>
    </section>

    <section class="Scroll">
        <div class="Outer">
            <div class="Inner">
                <h2>Support for scroll element</h2>
                <p>You don't have to worry about scrolling events and mouse wheel conflicts.</p>
                <div class="Scroll-box docSlider-scroll">
                    <p>scroll this</p>
                    <p>scroll this</p>
                    <p>scroll this</p>
                    <p>scroll this</p>
                    <p>scroll this</p>
                    <p>scroll this</p>
                    <p>scroll this</p>
                    <p>scroll this</p>
                </div>
            </div>
        </div>
    </section>

    <section id="anchor" class="Anchor">
        <div class="Outer">
            <div class="Inner">
                <h2>Support for anchor link</h2>
                <p>By setting up an anchor link, you can jump to any section from an external page.</p>
                <p><a href="#anchor" target="_blank">Let's try it.</a></p>
            </div>
        </div>
    </section>

    <section class="Mv Start">
        <div class="Outer">
            <div class="Inner">
                <h1 class="Mv-title">docSlider.js <span>Created by SamWest.</span></h1>
                <p><a class="btn" href="https://github.com/prjct-samwest/docSlider" target="_blank">View on GitHub</a></p>
                <p><a class="btn" href="https://github.com/prjct-samwest/docSlider/archive/v2.0.4.zip">Download File</a></p>
            </div>
        </div>
    </section>

</div>
  );
}

export default App;
