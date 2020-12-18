import React from 'react';


export function Youtubeform() {


    return (
        <div>
            <form>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name'/>
                <label htmlFor='email'>email</label>
                <input type='email' id='email' name='email'/>
                <label htmlFor='channel'>channel</label>
                <input type='text' id='channel' name='channel'/>
                <button>sunbmit</button>

            </form>
        </div>
    )
};
