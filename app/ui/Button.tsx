"use client"


export function Button(props:{href: string, title: string}) {

    const {href, title} = props

    
    return(
            <a href={href} className="btn btn-custom">{title}</a>

  )
}