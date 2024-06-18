import './not-found.scss'
import { getTranslations } from 'next-intl/server'
import HoverLink from '@/components/UI/hover-link/hover-link'

const NotFound = async () => {
  const t = await getTranslations('page.not-found')

  return (
    <div className="not-found__container">
      <h1>{t('title')}</h1>
      <h2>{t('description')}</h2>
      <HoverLink rout={'/'}>{t('link')}</HoverLink>
    </div>
  )
}

export default NotFound
