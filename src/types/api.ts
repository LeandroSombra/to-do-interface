export type LogoProps = {
  alternativeText: string
  url: string
}

export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type ToDos = {
  dados: [
    done:  Boolean, 
    _id: string,
    description: string,
    createdAt: Date,
  ]
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionTech: SectionTechProps
}

export interface IPost {
  id: number
  title: string
  body: string
}


