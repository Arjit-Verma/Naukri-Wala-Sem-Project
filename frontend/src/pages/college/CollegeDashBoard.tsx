import cap from "../../assets/cap.png";
import bag from "../../assets/bag.png";
import student from "../../assets/cstudent.png";
import { useState } from "react";
import { MenuItem2 } from "../../types";
import { ProfileCard } from "../../components/college/ProfileCard";
import CollegeNavBar from "../../components/college/CollegeNavBar";

const NavBarMenu: MenuItem2[] = [
  { id: 0, title: "Dashboard", link: "/college/dashboard" },
  { id: 1, title: "Stats", link: "/college/stats" },
  { id: 2, title: "Student Info", link: "/college/studentinfo" },
  { id: 3, title: "Company Info", link: "/college/companyinfo" },
];

const jobCompanies = [
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "NVIDIA", logo: "https://logo.clearbit.com/nvidia.com" },
  { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
  { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
  { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
  { name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
  { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
  { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
];

const profiles = [
  {
    name: "Arjun Mehta",
    company: "Google",
    roll: "22bcs011",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Priya Sharma",
    company: "Microsoft",
    roll: "22bcs012",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    name: "Rohan Patel",
    company: "Denva Corp",
    roll: "22bcs013",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhISEBIVFRMWEhUQEBAQEBAPEBAQFREWFhUWFRUYHSggGBolGxUVITEhJikrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQFy0dHx0rLS0tLS0tLS0tLS0tLS0tLS0tLS03LSstLSstLS0tLS0tLS0rLS0tLy0tLSsrLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAgMFBgcBAAj/xABFEAABAwIEAgcGAggDBwUAAAABAAIDBBEFEiExQVEGBxMiYXGBFDKRobHBQtEjUmJyguHw8TOiwhY0Q1OSstIVJGNzg//EABoBAAIDAQEAAAAAAAAAAAAAAAIDAAEEBQb/xAAnEQACAgEEAQQDAAMAAAAAAAAAAQIRAwQSITFBEyIycTNRYQWBof/aAAwDAQACEQMRAD8AyMBX3q0niElne8dlnjCVderqIe0Nc7SytMVR9CUIGUIoKBdiGVndF9ERhlW5+rhZS1dDtrqyYskSOsuOnAQlTLmBsoVQQJAldoFBiF/6xXLSc0HqfwPYTweOa7mCg7Sc0kySc1XqIv02T2Yc17MOahA+TmuPlkCnqonpsnLpLgCoEVciZOJvBsp6sSenIsD222VexndOuxB9tkPI/PqVUpqSpBQi4u2V2SMl+gTk0GykGRd4pM0dyElLhjX2gcRhu6hcZfAD3rXUzicZDVQcYjuTr6lFCAnNla4GcXETv8Ii6iBTO4oNzHNdcFEyV2i0pUYpOxiSTIvIGqnuuqyUehhHFWDAKpscrSTYX1tdVyG5RcZ1QMNG94JiMUjRlcCrFGWgaLNOr9gLRZaLHSm26qKNF2jtQ4HivM0G6V7GvGmsFZaoANU4vygeqNbEbXTMUABReqVFN2Mk0ugJ0rgbWT3ZndKfHxSe1N7Kki20CyVpabEJ1s5dwSKmnDiLp6NuUIFd0G6qxiocWgmyqFTj9pg3KfRWTEsTDWnksyqq8e0FwOl9kxQM88lUanSuL2g2XnNsonCccaWAa38lImpDtVVUNTsQ2PUpD26ohiS1uqi4RH2Q2L1GUG405qlYhOx2YcTqr9j+QMOZZPjDbOcW7X0Rw5MuZtMj65pBJGyhp6kompq3HRBSMvqmiV/Tgn5ryZLV1QKkFwPRLXodrFwghUUaR0BxZkRs51rrToekEVveHxWC4G/vBaFQUrnN935IVwxsHxRptFViQXGyInGiiej0WVgBFtFMTbImGiMY3XdEX8UHO/XRNgvSFOh7hYY8eKbtruhzIU1nffZVvRexhUzTpYpMshATYm5oPEavK03VRfNly6Kh0oxMtDhtruqA+pLn6Kx9Ka8OuPFVemcAb2WmPRz5fIvmATd0XN1Y6eUk2VQwFxd7rVcqCE6XCzzfJtxR4JaHZNTPsQimR6IadmoVv4l+SPxeHPG7RZ3iVMSCLLVizu2KDmwiMtNwFUJNAZMakYvLgrjqAgJMPcNwtAxt7IjlFrXVenrG3tbQrQnZiktroqvs+q8px9M29wV5WDuIKJy49yTGl2VBlr6D07TIC7nx4LbMNgZYWssBwGoyPBvbXgtjwLEgWCx4IX2Oxvii5wNA2Tkw0QVA8uR0uyIPyRYiBciezFky06p26VGKY2TYy6EXTdbURxMdJK5rGNBc97iA1oHMpGK17IInzSGzGML3HwAv8VgOO9Kpa2UyTOLW5crYA5zoQ3ll2Jv+LfbbS1RgmDPJtL3jPToPu2kGXlJO0jN+63/ytvsqbUdJqh4cXTPzAm4BAaQDqMtrDjtyCq8tSbANOg28EOXuJJ113TlGMekIlOUu2XBtU2WxkIboc7gCTfgQL29FG10RjeW5gdiHNJLSDqCFB9o4C2virG2vD4Q17dgLEbhzbAa8sqIU0WroPVC9iStOpWAgFZJ0Rqmh42HmtYw+S4CRNUzVhk3EkA0WQlQ1EhM1UjRuq8DPJE4ji7I2nMdlT8R6a6FrfiVM9KYGPYbb8FlWJUDwdEUIpmfLOSdWEYhiBkddzr8UDPUDTVBSwuG6ElceKaIqw6SoO4K8gGOK8oSjrXIqmFyAhS3VFUsZJFlAi74Xg0eQG2u91NYWxzdA42vb5oXonRvkAzHRXimwBoG6C+R0Y+Sx4KO6PJSFRsgqBuUAIqR90TCSIxrTmRRGiWGJqWoASLoa+StdMqQz0s8INi6Mht9sw1bf1AXzvFA5zsjRc3tYa63svoXHK0uOSMXceAWSVeBSUlXKHAXAbNFmuGBshd3neDcrx6K4SpNi5rdJIlcC6uRKwOleQTuGjZWum6tqZrHi7yT7tyBl+G6g8G6T1Ye1rXtkbdoOSF7WC/C5HLirF0xq69gZ2Li1pbcmNjXOHO7naBJ3SumzSoQq4xMw6V9HZaNwL7FricpHG3NRdLL3XDytzGuy0WjpJa1r45u3exzbSe0iMljrd18TmaNIPDVUNuEyxx9o8DKXFu/e7pLc2Xg24IB/ktGPJfDZlzYq5S4CMHuXjU78Fs3Rn3BqTpxWN4a8NcCtW6HVmdqmRA4H4Lg9lwoPFqOR2xsp8OsNUFV1jBuUPSHNWUGvDmaPuqriNaAdQrb0prWO91Z9iPeJTo9GKa91HZqlr9AEDNQEnZSWH0g3JUhM5oGnBWBZBf8ApdhsuoufEgTZeUJbIJ8V0dRDKk1kRY8t5Fe1QjS+9E8aDCGlaXR1Yc26wLD53Me3fcLY8OrbRA/s3+STkbi+DRidqixsqAne1VPwDGjPI8WsGut5q320Q7peRiSEz1thuqjjNS8u0cQLKx1EF1CV9Lc+iKHL5Jk4XB3ohTkkudqSdyorEaMNr39uXODy9vf1AjLs8bQeVnO0Vm6NMACY6wsMDoRVN0fB3n2vrD+In925dfkCiywuPAOGajLkj8RraSkZdsYAFs7mgFwvsBxuURRdLIah7WQtcbNBL3gCK3EE8Dt8VV34RHI4VLHyG5BkiblcHd23duLg7bKYjoWytyRtqoxsZCXMFrcA4kH1CyKqN3JZ6qtZ2d2gDTZZX0urGxUkcJdmdIe0Z3Q0sjJEjtR73esPqrNjNcymi7JpJIu1oJu4k7D5rOpqeapeHSkuIa2Nt/wsaLNATMMdz3PwZ9RPbHau2Q7HknRat1cA5dVWMP6NHTRXLBIewC0TdmXFBrkulX7qzjpBVvDyL8/grJXY8ALKpV7+1ddC4t9ByyJKmQE9Wbm5QTI87tFJVWFZjok0+HmM3JTl0Ypd8Ec+J8Z5oaoreCsFVldyUBWxNVlA0MYJuV5DySEaBcULoucmBdpK9x4lS+EdHmcQL3RIp5LHndKo6aYHdSlwO5/RIw9GonOFmgn6Kx/7PnJa/C2ij8Blc11n/FXFs4so4php0VrCOjLYSSL3JubqadERwRnahIe9BLGmEptAIiLtLfFKdhl90/G/VQ/SHpzRUncklzSbdjCO1kvyIGjf4iFI40i5ZA2nw/IdEP0kx2ChhM1S7u6hkYsXzOt7jW8SfgOKoWI9aFS//dqURt/XqH5pLX/5YsBvzKofSDpBJUVTJJnGQRvDi0+7bNezRsNPmjqkKc0yTFdUUzi+nNmEktjOoYCdAPTRPHpViDr5ZLX4BugU5h1E18YB1a4XY7gWnYoiDBWgb+nNc71UvB0/S/T4ITCcNkkcZp3FztwTwPEp7B6trJnwVTckjQHtc0EtkicLteBuPEcCrbS0YNowPAqG6zqJkRo57hsgk7EcC5hb3h5C1/7o8EnKXPTF54qMbXaDaTHKNxyx1ERdtlzhrr+R1RVRUhUh1JTyuHtDA4FpAN8vjo4ahR9LVTUuV7XPkpS8scyTV0QzWu08h9vVapYnXBmhnV+5FtrDmUfMcoUg8X+voUJV0xISFKh+SCkiOZXa6qMxbGbXASq2nc29lXKqNxJWmLTObKLTpj8eKOJ1TdRPcoPsSnI4zxRFUg2ngDgvJymNl5WCbRBG1GxRNSI4UZDGlo20JbTglSETEmKNFMaiKOBqV2aW0KL6WY2KKlkqC3MWlrWtvYFz3Bov4C9/RWUyk9bfSOan7Klp3FjpWl8krTZ4jvYNaeF7G5WeYLG2F+bP37Gz3RgZXHi1xJF/zVixXEzVH2iofmLQWRNaIwWtDnDUAXaCHceKr0wDCRdtj+ECxHgQmJGeUrY7XVDnO/SNaXg3ErQG5h423UEY9bnci59dfpZHtuTlbt4/h8R+SZrWEPN7cLAcBqFCi0dB8fYy1LVGzL/oZibCMn8D+Tb7HhfltpzMH2ObT6r5/PL4ePgtD6telM8cU8L4pZ4oYXSwZGOe5jmj/BzAbG4y8rHhoMmbBFvcjbg1LS2s0DE8QpqCIzTHU6MYLGSV36rR99gsb6UY3LWymeSwLBeKIG7ImZh3RfcniePwABxLEpqqV09U67tdNg0D8DG/haP611QYcb35963obD6BOx41BCcuZzf8Jl9YS0BgABtZoB0KeNPJk/TuIbq5rB3i91zbut4XIv8AzTdK4MjzgZi0XIuLMNvxH6cVBx4m90naOJ0PdA0A0PBNbEF/qallLFTs1c42Dy42Ljlu4+GpGnopWnnbIxr26tcLg/bzWb4hXuf2WbcZviSPzC0DqqAmhqGE3LJ9BxDHRtAPqWv+az5sSlyjVgytOn0D4jBoVU6kNDjda1i+ENyHTgsvxakDXOHBDji4kzU0Qc7m30TdgRokTMKba47Jxko664XkaymzheVbi6N/bGiI2LrWJ1rVRqsWxOgpsBeurKHwVRuuSe1A0cDUxg+IDXu+wV1usf64MdMro6dh/RtkcSLDvysGUkOvsC5zbaatKsGT4KXVVpjldkPddY/zTUlXc2d8TuP5ICc6C/DQeSXAwXsfEkk7jgAisTQcyfSzTpqCef8AJOVmuU82kH0/uhI5QSGloFiNBuf6un5DZrQeBt8v5K7IDyNGh56FbT1e1LfY4GR2yhgzlvCf/i5v2s1z5EcLLGDqCFYOiOCzSF8rXhkJZJE8Fz/0hfEW6NGhy5gbnbhrth/yOGOTF7p7EndmnSTcZ8R3We6wZYZMQmMJBHdbK5urTK0d+3DewPiCoambmkAABJIaMxsMzjZuvmWrlfhz6Z/ZSZb5QQWEljm8C24BtcHcA6J/AKzsZo5dDZ7jY6jSJzf9YPotWKljiou1XYmdubtUR8Qe/vvJOrct9hcHYJ6rp8mQcS4kjwvopBtMOzsCTZoIOY/hGo+H0QmJ6lrr7tBBF7+vimULsZkYSWDkXfAWVo6qMT7Ktkjv3Zo3DzfGczfkZFUnTEa3N7EC5vvvuiOjlT2VXTP5TMzHk1zg1/8AlcVUgoOmbni1YcptyWX45TyEk81qtRSXUHiGFX4JV0PkrMpdSutqgZISCtFq8ItwVdxDDHa2Cm6xe2iBir8mi6kVGHPvsvKbUUfSrE4CmGJYRDR264CmyUqNQg6Cvmmsm7SWbN3mvmklFjq1z3klzT46X52HIW3Pp9iZp6CokabOLOyYRuHSHJceIBJ9FgNDKA9t9Be3hZWhc2cqorDe4/WtY+o4fMeKlOgeCR11V2Er3sb2T5A6LKH5mlthdwItYk7cEDiQLS7z+Cluq6fLicA/WEjPjE4/UBBnbUJNd0XhSc0n+y+O6pqU6ionvzPYn/Sm3dVLLWbVv/jha76OC0ULoXHWtzLz/wAR1HpMT8GXv6pZdctazX9anePmHlWHA+idVTQNhDoJMpdZ3aSxXDnZv1Drcn5K4hLaqzZ3njsyJNEhgWOW6DpmKdZuEVMRhlnZE2P/AAWdnL2jnPILzfQWFh/V1VIY7Naf6u4BxPwyq/ddUlxTNG5lm5bgMA281R6hpyMI2JeB6ED6WXY00YxxRUVSo5mobeSTYVQzAEg8bgW2uAo+fly0HknWDQEcHpNWNXHxH3WgzgM3BNPCcmOoXYYi+9rBo95591v5nkBqULCR9HYLUiengm37SJjz5lgJ+d09LTgqr9V9YH0DQ3Zkj4gCQSA0NIvyJBB9VbDIgNC6I2fDweCi6nCG8lYJJEJM9C0WVOqwlg3C6pirbdeQ0TgszSnAhmSJ3tEwo5KV1rkLJPqlsnCohnnXRUuPscIPdcZZC0bl7ezaz5Pes1ZG5v8AwXO4d73fkPurV1wTl1cxt+62nZYciXyE/ZVSnILRZl7EtMjiDuPdbf3dDwt4ngjQmXYNV1ZNw5tjsdbqS6CTZcQpHf8AzNb/ANQLfunf9m80Ze2Vlhc5WgvDQBsXEoDBWmOqpncqmLXylbdDkTcX9BY3Ul9n0sEoJtqcavNI77FhclmawAuIFzYX4lekkDWlx2CgavtJpmtabNcOVwGg6nz/ADTopdvpAVbM8636gOmo7G4vM/dp3lYBt+6qpIf/AG0PPM74EG5+SnOtiUe1UzAb5acO3JtnleRuBwAVdrJAWxMbchoJdpYZjwXexKoJfxHDzO5v7CYG3Zb1CTWDuXO+icpq7s22aL6W1A01uPp8yg5Zi46+QG9hyThJF1Tu94W22UxU1LJGsbE0sY1o0Nr5iNdvqoOY3cVMUuDzOjz2u0jRrSQ/ztbXyQoNl86m6wB9TTl2rgyZjb7lt2vI9DH8Fpr2LKup3Cb1E877/oWiNoubZ5L3J8g0j+Ja2QhY2HQG4Jp8d0Y9iYcLKggCWBeRZcvKiC43pckmiQ1i9KzRQs9FBm1RDKUJmF9k+JVEUZh1yYIQYatvu27CXmHXLoz5G7x6DmsyY4gW4b24X8l9J4jSx1EboZ2B8bhZzTfgbggjUEGxBHJZf0m6tXRNMlG58wFy6F+XtQ39ggDPblv5okxco+SoUGMdm2RrgSHAWa21s3MkpcNZcnI1kYDd7BzjYbBx29LKJkiINiCOBB4eCcfL3QCNj8QisXRcYqhzHQRseY5RE17pATZrg0XLhx1J042VmHSqqF7StIaQ25haASG3cTbZZscTLnve7d+/gOAHgn2Y0Rcbg3uPElBLFjn8kmHHLOPTNcwqvqZ4w+Vwc0nusYwM23J563FvBTMFUByuOVri6q2F1ZbFGLEtygtItsdddfFGsmFwSbeOUG3jdcuSSbpHagvarAunUEDoJpBSCR7YiBUOaztGZQcpEj9bDewOvJZMDx56q99P8Yc6CRsjnPF+zjMIcyAOOxe/8Z0Om26oeYWHkuhpr28nM1lbkkKaUl5svArki0mM5h1IySZzXOy8Wt2zk62vwU/iT6hsf6JxjiaAC1oII4XMn4teR9FAwsF8xZcAWzkPcxjr90vDTe1rhLqauYnLI4kHvZb9x3I6aEIegjTupeP9BVPJ1M7Wc/djDr3/AP0PwWhKp9V1GY6Br3Cxme6a3JujGf5WA+qtpKAfHoSU05icJSXXULB3wryW668oQEZWBOtmzKJYwhHUZQkDgxOBiZD07nVkOhqUGJIkXe0UIZD1wzsbVxNaxubsc8pAAc8veQ254kBnzVBLx/dWXrHqDJiNT+y5kTfJsTQf82ZVktRIS+zvaBFU1DJJ/htz/uOa8+oBJCD7NJESjvwRV5NR6KdDZWnO6WQXaAWE6DQcPBWabBqiNhyz3vYDOxptf1CyChxyspw3samVgIuG587bXt7rrjgeCnY+s3EA0tf2Mh4PfCQ4Hn3HAHjwXPelzb9zlaOitXjUKSor+P4zPM4xyPvHG9waxujLtJGaw0/uhoDdoQzrkknckknbUm5T9GdD5roxSXCOdOTlywhecvFcKMWIZI5t8pIPNpAP9k/hglqZoYC4kve2NpaAC0OcMx24C59EK9WvqyxiOCrYyWIOMpEUUobmlhe7TT9k7HiPK6Bhx5Noo4mRsZGwWYxoYxvJrRYD4BEJD2LrXIDQeKSSlpJVlDTivJTgvKEId5RFONEBK0l2iJjDuaBFhwTgKFbdOBpRFDwcugpsNSgFCGB9L/8Afas319olHwduoeykekFRnqqk8PaJiPG8rtfkFHJiM77OroauArt/p81ChdbJmItsAGt/daPubn1Q9l07pTFCxBS6M7+f5JLwu0fHzU8l+A1ybulXTd0QAZg2ES1czYIQMx1JcbNYwEZnHwF+C2nop0Pp6EZmjtJiLOneBm8Qwfgb5aniSsi6D4l2FfTvvZpf2Tzwyyd3X1LT6Lfrpch2NKhWdNvK8UkoRhwS8F0uTMjUlknAqEHC9eTZXlCADW63ToKFhuBZPsuhRY+0p4FMhhSg0qyDwcuucm2NKc7NWUfOeJQSMlkbKxzJM5LmPFnAkk/Dx2KGBW79NMKo5Kdz6zuhgsydoOeJzjYagHu3IvfTmse6R4IaV7G9oyVkkbZo5I/+W69r8L6cCQUSdiZRoiwF3syRfh+S40Il8IFhfgCdNuOh+ARpWA3Qqnpbi/2TFRTEahSMJAGjvRJe65APMedlreOLiYo5ZbiHdIdiE7RgWPmPgi6unF3E23sBtcc7LkdHaJ0mZvvBuTXMPHkssoUbIz3DckgCGdKSnHNF9TfyTkFM52w/ryVU30RyUVbH8Cw19TNHBHoXHVw/Awe8/wBB87L6F9oWXdXPc9oitd7mskYQ25D2OIFzwF3N8N1pbihnFxdMbikpRtDntXgm3VR5Jom6bOiWNHn1LhwQUlY6+yKa++hQ8rAoQeFYLLijZ222XlVssNhedkQxyYijtxREbVCCg4rtylLrpLKyHmXS7lNdsuOlsoUcqI89g69gb2FtdCCDcbWJ8VmPWDEz2whpGkUbS0CzY7D3fhY/xLUe1BWbdYUMYqmlo7zow6W3F1yGnzsPkE/T/Mzav8ZUxhfFunEtOo+Kcp6R7c5cQdNBfTXc/IKaomty2322H24Ls8DbE2vpxOULUsaUrMLyScaIKUt/Ew35tN0JK4X0va+zh90RWTuubBoHJo0Un0Hwb2qovILxxDtHjg51+40+ZufJpUyTSReGDk0V+1ybc09E0We03F7WA2JB4+hKu3WJgrGxx1ETA0h3ZS5GhoLSCWuIHEEW/iVEZe9wlRamh04uDoNpMLzcvVWzAcEMlmMyZjfe4vYFRmDzOI1Jt4aFWrDe6Q5jiHDUEnY25JvS4EL3PkG6JwCOreNLCNw0FtS5p+gPwV1LwqZhxPt0bWi5yvLyNvdNz8bK3ub4rNqfl/o26PiDX9FOkXHOCZJ8U2WXO6zmofJThbmCBew8ykvaRsSoQ7JpcFcTHYX3K8qIECqJT7J3IBkgT8b1CBYe48Uux5phjkvObqyDjY0swptr04H81CCmx22WfdPqciqY/g+IW5gtJB+rVoIKpHWK68kA/Yf83N/JNwv3iNSrxsh6Ft/PRF1Qyg/NN4XT3+yVWt3ad+F1ts51cFSr9yeF/gtW6AYQaelGdtpJT2rwdwCLMB9Be3DMVnODUvaVsER2Moc4cwzvu+TStozLNqJeDZpIcbiA6T0hmgmgHvFt478XtIc0epFvVY7Yg2IIINiCLEHkVuOIHZyyjppBkq3kbSBsg9RY/NpQYJc0M1Mb9wVgMuluPj9lZogdz56crKm4JIM1vBXKNrgNdRYeJGi2MwROYZI4VMVgCCHtuNCO4T+StLnkKnYbN2dTE06h5IB4glpH3VseVl1HyX0btL8X9nnv01TbpF1zTumXnms5pOmVN+0JBckk+ChQmSbXdeTJdquqFBDUSw6Ly8oWhcZTwXl5QseiS3Ly8oWcuqH1iOPb0/8A9Z/715eTMPyEaj8bHMNHdHok40O78V5eWxGF9Eb0CF65pOpEchB5HQfQlamV5eWXP8jbpvxjNYLsN+SzTrEYB7MQNbSi/gCy31K6vIMXzDzfBkFg3vjy+6v+Daix5Li8tz6OdDsHigaaqG42eSNToQCR9FZJzqvLyy5+0bNN0/sHLimJ3HLfxXl5ZzSxJdoEzmNiurysEFkcbry8vKEP/9k=",
  },
  {
    name: "Ananya Verma",
    company: "Microsoft",
    roll: "22bcs014",
    image:
      "https://img.freepik.com/premium-photo/indian-student-college-campus_582637-22267.jpg",
  },
  {
    name: "Nikhil Rao",
    company: "Denva Corp",
    roll: "22bcs015",
    image:
      "https://thumbs.dreamstime.com/b/indian-college-student-holding-laptop-28076030.jpg?w=768",
  },
  {
    name: "Sneha Iyer",
    company: "Microsoft",
    roll: "22bcs016",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFkrANLT4p9Vw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704442939513?e=2147483647&v=beta&t=CFFbykb9wPABlp6sT_yDB7TcTVpdJTExgciPP6i6VUU",
  },
];

export default function CollegeDashboard() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-white">
      <CollegeNavBar menuItems={NavBarMenu}></CollegeNavBar>
      {/* Welcome Banner */}
      <div className="py-20 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 z-10">
        <section className="bg-linear-to-t from-purple-400 to-indigo-500 text-white  rounded-xl mx-4 mt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="p-6">
            <h3 className="text-sm py-4">1st April </h3>
            <h1 className="text-3xl font-bold">Welcome back, CGC!</h1>
            <p className="text-gray-200">
              Always stay updated in your this portal
            </p>
          </div>
          <div className="flex items-baseline gap-4 px-5">
            {/* Only visible on md (medium) and larger screens */}
            <img src={cap} alt="cap" className="hidden md:block " />
            <img src={bag} alt="bag" className="hidden md:block" />

            {/* Always visible */}
            <img src={student} alt="student" className="sm:block pt-5" />
          </div>
        </section>

        <div className="my-6 border-b border-gray-300"></div>

        {/* Job Applications */}
        <section className="mt-6 px-10">
          <h2 className="text-xl font-semibold text-black">Company Coming</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
            {jobCompanies
              .slice(0, showMore ? jobCompanies.length : 5)
              .map((company, index) => (
                <div
                  key={index}
                  className="p-4 bg-white drop-shadow-md shadow rounded-lg flex flex-col items-center"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-20 w-20 mb-2"
                  />
                  <p>{company.name}</p>
                </div>
              ))}
          </div>
          <button
            className="mt-4 px-4 py-2 bg-gray-100 text-blue-600 rounded mx-auto block hover:bg-blue-100"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </section>

        <div className="my-6 border-b border-gray-300"></div>

        {/* Completed Courses */}
        <section className="mt-6 px-4">
          <h2 className="text-xl font-semibold">Students Placed</h2>
          <div className="items-center grid grid-cols-2  md:grid-cols-6 mt-4 ">
            {profiles.map((profile, index) => (
              <ProfileCard
                key={index}
                name={profile.name}
                img={profile.image}
                rollnum={profile.roll}
                company={profile.company}
                date="Arpil 20, 2022"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
