import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right"/>
                <Dropdown pointing="top left" text="Yagmur Altug">
                    <Dropdown.Menu>
                        <Dropdown.Item text="My Profile" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Exit" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
