import getMdxData from '../../../utils/getMdxData';
import MdxSourceToHtml from '../../../components/MdxSourceToHtml';

export default async function PrivacyPolicyPage() {
  const { mdxSource } = await getMdxData('privacy-policy');

  return <MdxSourceToHtml source={mdxSource} />;
}
