import MdxSourceToHtml from '../../../components/MdxSourceToHtml';
import getMdxData from '../../../utils/getMdxData';

export default async function TermsConditionsPage() {
  const { mdxSource } = await getMdxData('terms-conditions');
  return <MdxSourceToHtml source={mdxSource} />;
}
