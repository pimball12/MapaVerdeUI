import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

const gardens = [

    {
        name: "Horta Comunitária",
        description: "Muitas Plantas Muitas Plantas Muitas Plantas  Muitas Plantas Muitas Plantas Muitas Plantas Muitas Plantas Muitas Plantas Muitas Plantas Muitas Plantas Muitas Plantas Muitas Plantas Muitas Plantas Muitas Plantas Muitas Plantas Muitas Plantas Muitas Plantas Muitas Plantas Muitas Plantas Muitas Plantas Muitas Plantas Muitas Plantas Muitas Plantas Muitas Plantas Muitas Plantas ",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
    {
        name: "Horta Comunitária",
        description: "Muitas Plantas",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
    {
        name: "Horta Comunitária",
        description: "Muitas Plantas",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
    {
        name: "Horta Comunitária",
        description: "Muitas Plantas",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
    {
        name: "Horta Comunitária",
        description: "Muitas Plantas",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
    {
        name: "Horta Comunitária",
        description: "Muitas Plantas",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
    {
        name: "Horta Comunitária",
        description: "Muitas Plantas",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
    {
        name: "Horta Comunitária",
        description: "Muitas Plantas",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
    {
        name: "Horta Comunitária",
        description: "Muitas Plantas",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
    {
        name: "Horta Comunitária",
        description: "Muitas Plantas",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
    {
        name: "Horta Comunitária",
        description: "Muitas Plantas",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
    {
        name: "Horta Comunitária",
        description: "Muitas Plantas",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
    {
        name: "Horta Comunitária",
        description: "Muitas Plantas",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
    {
        name: "Horta Comunitária",
        description: "Muitas Plantas",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
    {
        name: "Horta Comunitária",
        description: "Muitas Plantas",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
    {
        name: "Horta Comunitária",
        description: "Muitas Plantas",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
    {
        name: "Horta Comunitária",
        description: "Muitas Plantas",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
    {
        name: "Horta Comunitária",
        description: "Muitas Plantas",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
    {
        name: "Horta Comunitária",
        description: "Muitas Plantas",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
    {
        name: "Horta Comunitária",
        description: "Muitas Plantas",
        opening_time: "08:00",
        closing_time: "18:00",
        owner: "Neto Mella",
        picture: "adaptive-icon.png",
        distance: 5.3
    },
]

function GardensList() {

    return (
        <View style={styles.container}>
            <FlatList style={styles.list} data={gardens} renderItem={({ item, index }) => {

                let img_path = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgXFhYYGRgaGR4cHBocGhwcHhweHBofGh8eHxwcIS4mHR4rIRwcJjgnKy80NTU1HCQ7QDs1Py42NTEBDAwMEA8QHxISHzYrJSs0NDQ0NjQ0NjQ0ND00NDQ2NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQBAgUGB//EADwQAAEDAgQEBAUDAgQGAwAAAAEAAhEhMQMEEkEiUWFxBYGRoQYyscHwE0LRUuEUFWLxByNygqKyktLi/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAkEQACAgICAgEFAQAAAAAAAAAAAQIREiEDMUFRYQQTIjKBof/aAAwDAQACEQMRAD8A+tIiIAiIgCIiAIiIDR46rErdAFbJRo/DEVVVzArrgquJhwtRZmUSCFkNW8LIC62c8TTSs6VvCzCljE00ppW8JCWMTTSreGIAWmExTLnKV6OsY1sIiLBoIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAwoXhbvesMMrS0ZeyLSt2YcqXSFlVyCiaNYAsKQhIUstETWLY4akRTJijVjYWyIoUIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiALBCyiAjOGssbC3RWyUERFChERAEREARFW8RxnMwcR7BL2se5o5ua0kD1CAsovI/BfxSzGyzBi4n/ADWyHudTVUkGQI+UhSfEfxjh5f8ATbhRiYj8RrdNaNniPeoA79Cs5L2acJej1SIi0ZCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCizGM1jS95hoEn83Ui+a+O/ExfjPZxDD1aGmeEkyC4RcN0kk2oarnyzxWuzrxcecvg4mNj4f6j5e7Bw/wBVwwg0ROozBaQQInn02r1vgbwpmYzLsXFEuwDDAXatRH7jAA4TWs1dOy8xnc6S9rsRjnMa/UwNOkRsDSdu+y9n/wAPC/GecVwDQzUDH7tUgDrs6ei5Re062dpp003pH0RERek8gREQBERAEREARFhAZRYWUAREQBFha4rw1pJsBKA3RRYGO14lplSSgMoq+Nm2MexjjDnzHkjM4wuLQ4agYiUBYRcvxDxzBwSA94q6O1Pz1Rnj+XIJDxAEqWgdRFyfC/HcPHLw0gaCL0mVzPiz4i/QbpYZcSBS9duizOairN8cHOVI72c8Qw8P5jWJhcrM/E7GiWiR/USAB0qa+S+b+JeIvxMRrA4PmJnUYIvXak1UGZxdL4YQ2kQ3eNjSB6efPyvl5JdOj2x4OOPez6DhfGbXO0hu8H5qeYEe5V/D+KMIjf6ilCJtK+T4uO4taQS7mDpArII4RTutG514dpZwm5AgxAgwItsd7cgilyeGHx8fo+xYHxBhPisd4p3VrL+J4byWhwkGO/bmvkmD4m0UxGkk1D3Q2wNaQKSaRsrOW8YYxw14kja1TQA2n36J97kXeyP6fjfWj6614NiFsSvlTPiF5JDSbxFAQP6mkmpiNtwrT/jDEY0BzdZqdnXrsAYHOAtx+oflHOX0vpn0LxPMjDwnvP7Wkr4rmXOeXYj3OAcOEAQY3cZraGhu1916f4q+J24+AxjNQmDiASLD5SYm8LzOJmQW0BuLdJ3WeSWTtHTi48Y77KWYx3gBpJ0mADyiTfl0X1b/AIe5XTltW73SY7TPuvl+YZLdE7xWkXrPcL33hHj4yujCeJwzhh0i4cSfUQAE4msl/TPPqL/h7xF5LD+NcN2O1kf8t1NZuCbE9Ff+JvHP8N+kb6n8X/SL/WV67PEd5Fxc/wDE2XwmtcXh2qwbX15LqZXMtxGNewy1wkFUEyLCwXDneyA2REQBERAEREAREQHy3H+Mcw90ghogCB0rKs4Pxi92C9jwXPJo4bAmDPLYea8fiTCveEAh7pEhzSCKTO0AkTXkuTdIIvYXjWLgve3CcQ0nett/ZMP4mzMRrJqDXoZVRgJc5rmgOJdFqFoki9o+oU7vDgGFzTUCSJFgKmlq7clFKhRN4v42/HeHnhIbAA2XNZmHB+rUQec1WjH17o8VrZCG2M/W6SZndYxXuERZbMAhbSIjcK2C/wCDgfqtm13VidI1fZcbPZ52Ljap3Lq86kG3akWPkul4Y+HT0d/6lcDDxRrO7iN+m31rzHVcJ/t/D2/T/r/Td+OGvnTJrUyb7wDaJ7mSoH5+DsPr1rYf3WMy46o84G53J81Qe3i51vYfkpGKZ0lJro6uE/U0SRLpitwAJJ5QNXKwUeYI1F4NIidrd5sVVwXDc9PUEKRsSWUIIBmJABBI7Rq9lqqJdmwzOIxzdLqxEmsU2n8urjXvfMkai4RAbXtTmYVJ7xojVRrYB7U/gQjcQBrS03d5jp3uPVZaNJnRxMwwMcHgyAGwDcTBIFOk89lI97X6fmFBMXBPfYXVEFrnxAAJl28aQY8pIV1mZLak/tb7kme6y0bTKWDhuD3MM8Jj2MHzorJgtIBr6UrP50TGnXXi1CvSDT0pQ1VV+JA5d/IR6T6o9k6L+UYXgtEydNN6kW9V0PF3j9VzGnhYGsb/ANjQ0/8AlqW3wsype+IZxE1g7COhJCizHE4uNySfMmVeH9mzz/Uy0kc5zyCrfiniWJitYHuLtAgKDPsiIVXHxDAAC9aPGbOxoAXVyHjGKxmhj3NZeAVx25R7jEUV9vhzmNB50S0Wj02T+Onsw3se3U+oa6efPsqWa+M8R4Y0Q39NzXU/cWmfRcJ+VOsDdUjgHU//AE3VB9Yd8b5c4TntJ1htGEVJP1TC+NcAsw3OMOcOMf0kD6SvlDgQzVzMBb4WXfMXJEoD3nw98XkYhw8Q6mOe4tebtBNPJelzHxAxmZZhlw0PbGqaB80BPVfH8uXSSLturGYzD3gFxtZSyH27N5pmGxz3mGtElc1vxLl3Me9j2u0N1RNSvkGZ8ZxnMLXPeQQBBJNrKjg5o2KWD7/lc3h4jGva4EOEhF8NwPGXNaAHkAdVlW2DZj4hwdSKED5XciJtE1V52p2I0gUJHE2xNHSDyg+yp5bB0wCDoewGtbifKsiV0mDQ3SJAa0eRp7wd+vNeecjaRJm8I/q6oJDQ0m1ZcGzHWLbUW+WcGa2nVdwAuTOhpbPM9rI94a0OAqWgQLACXWNCDy6StX5iDApAmBS0TU1J28lzy8FKbcrDNX7mmvIy3VT6eRUGOwnTtNfJdEGm9SQTPID2uVM/KB7ALFtJ71+/utLlrsmN9Hmf1C15BNFM1xmRyXSf4CS8O1sIBqCDUeStnwyXUI0lpbG8mamNxVdPux9kxZzMpmwxzSbE17G65niXhz8J36jSHMBDp56nfk916J3gBMkvAk0AFIvYqb/KmnDexzplpgW609FynKPaZ24m08X5PIvdq421mfIR9qlV3sIEcgF0ctlQHOZagMdAZjoIn1VfMsB60lIyPVJOtnLdiQYrMb9wmFjcU8pA8/sK+q6OQ8M/UxWiS6ZBpMAggu6RIM9FBmvB8TLmHMNCYdcOGxlbyj0cadlV2MQ0DmPSTKky+ppBGw9zKgqT3+4/sfVTZbEoeX4EfQT2dPDw/wBMGYJIv5kQo/1xvUBpn7R5lVHZoz5/RAKVoDB+3/29FmvZvL0dluaEVO4ne8Gh7j1WcHLOe9rf6jAPlY+Rv2XMy2XfiP0gEiKU9ASPSeq914D4cWNBfR+kN9N+my4yddG8tWyHM6cNowWQAAC6N3RWVz30K9MfB2PEueJMwTfzULfABQl9Bv8Ab1XWM4xVHjmpSlbPMY2Tc94dPCF0st4e1tYldrE8GIMyINgXAR3qjMkTQPaTFvOPMStPmRlRZSbhi/5dYxmzAEQFYzOTcz5zCwzJudqIiG3MinqVl8noUU3ZcatSgOTEvp8yvaLQQZshZG4lT7jGJzcTw0OYGxYyp2ZMBwPRX9BA2UbJdUBPuyLijks8MLQ+P3H7qHMZJ8MAExf2Xf0u5LUtcKwY7IuZjFHnMXIkPfw0007wqr/DXfotdHETXsvWHqFG6LLa536JieTxPCQDQcvoi9PoCK/e+BiURiEguAq0NAmxpN/2iFs7E1PiT8o9QJmo2IPr0WcAUediyRLRfSAdImk2JUWLjaWglsXE2gi9BPOCuYLuPqLiIqYIMbTF9/m2Vd7QZkVIIFBevcjz2Kw7NtLQ88PCATWCS6CWwJvXzC2wXgiYIINDSwN9tvsEaBnBGmJgmKzX8t9FawjpiLReT36/hULHNNIFKx6E0E81KMoQZaYkV5Eb159Krm/kqXok0cwZNpKsMYaTMVkHYbFYdh0oCKioIFxtM06BbPwzTSS4EUc1sgzea3H3ClM1Rl74g3FqeUdgqfiedbh4RdImJBrIgQSADfSSJ7q+/ANZkAACd5NwWxG1z91wfitr2tbLQ4F5dAHykVrvYNHr0Uq3R044/lbORlmgufiOLnWY0kQCYqZmsVpRVm4LnToaXHiIArZxk05Gn+ylymTc7K63aif1XF0ClvmdvNIiV0vhiNeIeGXAFrq6gAYMgUGwi66dNnaUvxs6HgvhhwmSfncKkH5RSGjmaV8l0iwPkOa2KUJ8jfuFYLBaQ2nr679hsoXZeIc3iG8GpFPWo91jvs8zu7PO4/w4w4mtrtLTXQOnVcjxvKjDeGNbDNIIaNhS/wBV71mC400AAiYlsnrQ8/qvKfF+WLXtfFHGOlB13MR6rSe0dItt7PNZtmlodE1AgDePaxU+UwDimHiBIbfYmb9CTVehyfgoxMsdRJc862GIgtlrT2PF5ELi5LEIdWJEyIiSNt96z1XRy0aVNnsvCMozADmseXNsA6pYRQwRU9juF0ziAkkHeBBPckj1VTBGtjC8fsvHTVfndS5bCAEQSY2J7VG1qLl8nGV3RZZjGBAkTvBi9uiw7NS0yQBZsAgzzvf+FC57gJbJi1R2r1uq+NmHAVadRNqcIM3g2ofVTszZ0cHMMdGqQfTv+dVLisYWkgkRUAO+hkBc9+I0gWkC9r1rzVXU0VEkXHJvWlrwJ3cOaqRrI62ZBfo4gLw0kw8873FhK5eZyr8Nxc8iCK6YIFt7xspsxmeAQx4DTPES6IoPW+9681IMV7uJ+hwc3hGkEgA1JPL7QqtB1JlXLAvu4AGBWGwL0MfgXSxsqHCWOaOsikGDSa0XKOI4aQ2AwbyJvUia2B9ka/EDiTBYCI4m1kGumZp0UqyJpFzL4DpIL21bMCQSTMHelFK7D1GW0ifpE79NlLhP1tgOeK/0jQPOZFB7wtmsexhJIIEXbFJ2pW6NG4pMqjKONagc+cf6fJHhwIEgm4mRPKVO7PMcBpJdYRSACRe1o91pjvIcHBxc0mTFYmYue1uSlGsV4I2YrwS1wbq8yJ5dB1W2K9sHU1lhNQJJ/KLD802+kkgX0GeXKfqKrVjWOBdEExNxqim1Jt5KpFxIMQGTDf8AxWFNpwxy9N9/dEM4o5GDjguNYtUW61puqjMYOaQQ2dVBz1E3O9t+ip5bOh0hvzSZEGpmSCbTW/fupCQC6YpG1zWPt2Xdxo89lpmVBbJMmQAINjFfwbhWcHKl0long+WsDiDZAaes+qhL9bCbyWkOAmoEX2vbopsLMwyRPUCTbaBfc+SyzSo3biCA2kmpgC8Unl/KnwCTbV8smaCl67gGa2oPKpmcFzm01RUzGomoio7b+uy3GMW6ZBEEAgAyT81otX23WWi1R1/8qxIoRB2LmxJFKAdrKTB8PxTuwlpvLeEwCBQ0Nvai5OHmdR1Fx1SDIEwxtyCd6xyqr+HmHNdwgiTGkAuMkRSvJsxEU7rGMvZpOPplhzcWdLiRBtSkGATAiYrO0rn+NhzsF7HAk/NvMCp70Fip3+IuaHf1UHegGx6Kvmc/DSC6ej4IEzMEGpoRNetkxb7NRlFO0yj8L4wOBoLZ430pPIfW3ouXgYf6GYDatY11wCAWkji5mKf/ABVzwPCfglwD9TC6ZMEzEEeUAGyteO5IY0Ektcwc4BG/Ie/ei00rNqWmXsy8uILQwjlqqCbahA517KPW5sg99IgxQeUmLg7dwqOHjP0tBYXOB/aDDhpgOLjSfwLo5fFLi7XAIqZDnUAivM+alUcnF2YGYrVrSCf9M/QdaLm/FLy9jG0B1gDlFons4K/noBlrgYrIoKgmNL4M0VTM5drtLwTGHDtJA4qkUINDY1vF1Ut2IvF7OgHhoADeEACARsAL7CAPdcHxXw7Q5+Iz95kiwaSB7X9VbZjtia7A8VybdL9Fs8h2oVGohtRcNP5Uc0qiQm1IvZfE4GF3CC1ouSBwgkAAignmrjMTWDpBJFomoNZo61OU08153CxNbCwOeCG/M2QdnA1NP91by+NpLZkvEtBgTubWiPJMdEk/yZ024hbqkb1/G9rqHAe4anOMlx2JqCIAta/NRMx2uI4xvQyfb+LKXBZManHYggR5AG3P/dZaolkWICTDmGgEEUA4SRaA7YdZnqrgwxYjTUTBqOkAmnQ0oPPXEDGkcZNRHDM1i326KF7WAfNAn9tJEC/L+ytlqiy8bNLnt0nUdQlsG9LV6QFO14xGBoeyCIcSADMtApMbmn8LnNxGV/cQDXimRBMg3FuhndU8bGGGaaS35nbEMMS7TYmoLuhVSs1dFzNZKXPDQCS65IvImnKq1bhaKNMCai8dp/mqwcyBLS65Fqg9amvdRjMAO4WlxJANaHTWs0rUeamyaI8bPNZ++IDjAcajnG9BPqrWS8R1seHtD2BzQ0nUXV3G0Caz0WHYAc0FrGzUTpafoJE9Leygyz3saGGaRDT+0WF4tEbdldUFrZ18u1hg6AHGlAAIim1R2+ykxKOAaWg05AihjkuZqc0cM2BJtpNhZS4eO4NFnOJB3mjRtcdysUzpl4Og1jo4jAFS03BjY705hRuwdNAKEXmYmdj1qaKuzUCTJIcARUSHDsNh9Fh+Mw0mCLmZ2nn3VN2b6Ds93kW/wixhtECh/PNFLJbPJ+GZQh+uaufyG7qCBFL028lYa8OJDBBJigipsALgKvhASAHEm8EViJgD2VhoOoggzRwlsbUiRC7yZ5oqzAe1redqihFduQ/OqB8iJI1WBPM0NY7LU5Y1LDDTEE8fqWzP5ZbYGU0Ol7y0ioAbIpUgaokWpXdTJMuEkdXJYLjLtJoIAJpwmORIgrXMPa6NTmgtaSQLlwpDaf6R/vRS42bJBEkPtOnYc7wQDYRv0XMD2PcWtLg6DxEuF5M6oEyTyr5KRVvZZOlSJW4I1Q2AyXbHUYEEUEEGJ2uDRWcy06nRpEkO+apL622j+Vzy/S1sGOI6hfTS8ndWnlutz6aRDTIh5gXMzFTFtlWjBexc0Gu1QCA40iQHNrcmwbpim55LLWBxGqWmlt9TaBxIiBZUMywuIGnh1EkTO8FxI2NBtCkcxznEhxodyBYHeYkRbn7xr0E2X+AiCBN5a2kzFO8bfZbZjCLCGhocHVoSZoBVtZvsqbHyKEmamJkWrFJtKsMxSI6QXUrFKTI9VzpnVSDcHFsQ4VrHSTFQI2CMyYYOKYEi81mhr2E9law89OrW+BAuRteL16dRRRjGcTR/zxSKAjUYmknoOQV2W0VMz4a8Q7SYMxEwSTHKZreNjtRRtwHCHAUGm8tMdN/w9FfGZc9zHagTBIjSASKTHrTrzqJX4z3MOkCImlZpSLA06+Yqq5GaTOO5ji4mG2mCBcUrafyilewmaeYisO67wRWyvNw2gklhJMtDg/TxEHpHKkVm6g0tA1BroM0A0nkK3mgmPqrZmimwBu0TAEAXMCSD3TCwgHFwJkEm9pOo9yKfRSPx2xDQTsPvMXP91qCQelXE1HSpI6eabFoPYLadGwJgGhoZB3vKky5EUn5SQDUwCJB69Nlq4k2mNOxAJmGwNxQx6gqPAaS2DZsCHTJArExWIKF0y0x8GSC2sSSAKRWp59dljGeA2huDsDAEfumgraFtjYdAS5pAO9IdUGOZkclXx8cNloBFRBtR1/f3lRBqizltERqDTFNIkxSw2qVjM5DWA9scNQdPFQRMi87jnZRZbUXHS0F5EGsmtKe8+6tDMPbQ3mCSTAGw4aczE19kNRqtoiy2E4EkgFprsaA9bDobzZbjIgCQYkyCQBUgbC8iPwrD37nU6KHSTMQZpHPbt5atcPlLZkzxco6AC1PZRmkvggx2FtolnzQYaZcTHOBNxzRnHAJMyaybjnfc7q4/A1QWE7iL1kg0JEXntCoY+QxjJlrRO4HOASBcwbHmqRxfgnZhwOHU47yf4gR/KgxGQNRdAm1HC1pBpz+y1e986GtcTMb2pzu3eZ9VEyBLNJinC5tGxJpu6pvFa8kojfwSuxCIDQZNQCDWKWmu/osf4hrnHU3YwS3STSm1Ykeq3a8kENBjYSL2pFxVSOnTAN4kGkGLibmsd1bQSfhkeGRAt7n7IsfpdWjz/wDwizj8mijkPDnxLMPFcJMQx5EUiaGaClrldHLeFZlxDmZZ7ZpqMNsd9ZneD5qXMfHOZJDQ3CaSYEMe+pMRV7Vt4h4pnGsc4vOgX/TYyncO1u810eN7JGLrRdHw9meF2pjDWWh403mDenlsFM74bJeX42JhDhtDiATvqdEe68BmviJ74H6mI8QbuAg7SGBojuq3+Ygzqw3O0/Nr1O/97HsmPwW1e2e2z/h2Cxj9GaZiYp+XDbpEuisAEkknf2Xn8yMQAgtcA2JHIVvuKxt9lSyPipc0aA5vGGkMlsCDDtUWBEHym4nfGw3u1aydT+KSaiD8pkTvvyK0lXZyml4J8XHpqdIAFPlvziaG3vyU+TzMy19dVBJoO9JIXMOFrFTU28qgUn1U7cM78J86ncTEEbXWjmdPDxtQB1EGXAncwKx0tN1LhufoDbkUMyRvM+g2m6pYWPwtBcZJuBJFLXv/AApcrjFo0A6TNSCIgltCT1jkubRpFnLua1svpIm5aRSIkGkxMwVLghr26SHFpkA6K1ub0iwJ2C3yvhzXPc7iBtDX6mmTyqQ07DofPpsy7tOiJeBMOPlQilDNqrDZ1jH2co5dmoNGs6Zo58AgQCeYN7LovxsJpBDHCa3IF9OwBN4iVtl/Dv3P4NRoA4kExE1NKeVBQLfG8PGpr2ETEQ+TQeUAwPdS77Lg1tGH4mE+CWGATZotau8CFNkcDCdTDO5IGqoFyAHEmY58lXymG9ry97muGokig0zJEHl3V/PZoMaMUO4QBNKwepteVNdI1H2yVmKGF3Ca3N7cPqIEAdVH4hmGxLRqqJBEg15ESTMfgXLyfjLH0cwAwXA6AHUcWw0k8gK71spsxnA4S2GgU4wQTQ7iRtzSmg5popnGa46SDJrNiJBpJ2pvWnpEcYOjg1CL0qIAPbp6qTMcQsCeRu3cGptS8fZQEh1iyRBtItFJ3vb+VTiyV+FXSQLU4azyPIzX0UTQGkkXkGAP7c49lh73gmTQ9elZ8h5rD3S6Ji9RzuDI/LqpkNzxcOsEctURqdNi0kCptuK3VfHy7CN3TMSZFLSRBvba9Fdw3AVDjUanDSARFL9Ry8+mX5XVQamgyBrqIBBtdvKfRW6NdlEOc11aagYgGomXUN9+amzGbcWvh8NBgTFv+kisCPsrP+KeyGgtLh01TANQTXflupHYOujGtc/m5kTJFqkGefUW3qaZUvCOfiY5dALgYOqAdyBFog/ysDGc82qZFb87kTt7q0/w940nFZ8tdTWsi1Qag7xRTZbHY8gQ1sChkk1/0xTaTq3lRv0XF+WMtjaQQ4NaARF476pAt50UuZzTY0gUoSJF96X3H9lFm821r/3FsBpaWhpgCLxUVI5+qpNY8tLG6P02mhMTIGoV1Wj8opV7N5VoYucJprBuIA2nceXPZaMzDhHFFI5CO/ei2eWNMufDnfuBlgMHYRFgoBgGzXiANVaapmR7e3dNGHZZfmZFZkdb1i/NaNe0021WnzIP9SpzDiC73tQb+R33W7nmZ0ki1CK+Rv36q0iZMtDMk7AVNIjflKKPWN2P/P8AtRWiWcduG8gwQwEjjq55F5mRFDalrc+1kM8WtYG4hmYjTWjeZpsiKySfZYtro3eMF7nEshxMucABJ5wN4V7DwWBgABE3aTT28kRYZ2RucpMlgggdIO5kbrhY72lxYKObJNJE3ioFpuiLC7Yn0jk42MHB2kQSfLle91s3FjTrANd5rwmlDaZN9kRejweXySZfFLuKADqmDUOrNppZdzJ4TXbnU/8ApAaALb9URY5NI6cW3stY2RLILHmSYAdeY1aaCOdfdbYeE46HOxKgua1vHFSWxM0MgmURc4ttG5JJlbEzEcLi4jYkzT6gUspn5l0OBOo3mSfTVaoCIqYTZzhjPaHVIhlYPW0eceatZbxA6NZbqaRWTYB0W3vZZRWh0a4eba6gAa4TdoLamwiorHurZDWt1NcQYFAOpANTy5Iiy+yJsr/rGpIBkgw6JpQHU0VturGpriYaA6aHc6uZWEVYRD+hJJ6xOxMAiR9Vh2XdquI0ilpEXpuVhFRSIMPDJpxO6SJk87CBJosYeANUSWn5jQXMkCR5oiq7YrSJMDEbZxkCZgm4MVDmkGAJpzuVbLmMlwmhigDaE0Bi4ma3WUVfZV0QY3i7tIGGwxIEOLTWRF77VKpHMuD4e1skw6APrziedz0RFUl/pGywzB/UhranlJGnnBNKwNt7qF/hWKAC3UGkkwHigE8zB3Fh7oizbo1FJ9mGseXNGlrjynSetYIv5LfGYWunEOkEENENdFjUAAQKeZKIobUUV8y6ptcBpFJJEgWMCD9qLUEgCu0c7c7dfRZRaRyl2Taev1REUIf/2Q==';

                return (

                    <Pressable style={({ pressed }) => [{}, pressed && styles.pressed]}>
                        <View style={[styles.innerContainer]}>
                            <Image style={styles.image} source={{ uri: img_path }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={{ color: Colors.primary700 }}>{item.name}</Text>
                                <Text style={{ color: Colors.primary600 }}>{item.opening_time} - {item.closing_time}</Text>
                                <Text style={{ color: Colors.primary200 }}>{item.owner}</Text>
                                <Text style={{ color: Colors.primary600 }}>{item.description}</Text>
                            </View>
                        </View>
                    </Pressable>
                )
            }} />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        padding: 20,
        backgroundColor: Colors.primary100
    },

    image: {

        width: 100,
        height: 100,
        borderRadius: 4
    },

    list: {

        flex: 1,
        backgroundColor: Colors.primary100,
    },

    innerContainer: {

        marginBottom: 15,
        padding: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.primary400,
        backgroundColor: Colors.primary400,
        flexDirection: 'row'
    },

    itemText: {

        color: Colors.primary100
    },

    pressed: {

        opacity: 0.7
    }
});

export default GardensList;