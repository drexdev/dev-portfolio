import {Icon, IconSocial, SocialStyle, UlSocialStyle} from "./social.styled.ts";

export default function Social() {
  return (
    <SocialStyle>
      <UlSocialStyle>
        <IconSocial>
          <a href='https://www.instagram.com/drex.dev/' target='_blank'>
            <Icon className='bx bxl-instagram' />
          </a>
        </IconSocial>
        <IconSocial>
          <a href='https://github.com/drexdev' target='_blank'>
            <Icon className='bx bxl-github' />
          </a>
        </IconSocial>
        <IconSocial>
          <a href='https://www.linkedin.com/in/drexdev/' target='_blank'>
            <Icon className='bx bxl-linkedin' />
          </a>
        </IconSocial>
      </UlSocialStyle>
    </SocialStyle>
  )
}