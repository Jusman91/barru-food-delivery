import {
	BiLogoFacebook,
	BiLogoInstagram,
	BiLogoTiktok,
	BiLogoTwitter,
	BiLogoYoutube,
} from 'react-icons/bi';
import MedsosIcon from './MedsosIcon';

export interface IMedsosLinkProps {
	pathFacebook?: string | undefined;
	pathYoutube?: string | undefined;
	pathInstagram?: string | undefined;
	pathTiktok?: string | undefined;
	pathTwitter?: string | undefined;
}
const Medsos = ({
	pathFacebook,
	pathInstagram,
	pathTiktok,
	pathTwitter,
	pathYoutube,
}: IMedsosLinkProps) => {
	return (
		<div className='flex items-center gap-4'>
			<MedsosIcon
				Icon={BiLogoInstagram}
				path={pathInstagram}
			/>
			<MedsosIcon Icon={BiLogoYoutube} path={pathYoutube} />
			<MedsosIcon Icon={BiLogoTwitter} path={pathTwitter} />
			<MedsosIcon Icon={BiLogoTiktok} path={pathTiktok} />
			<MedsosIcon
				Icon={BiLogoFacebook}
				path={pathFacebook}
			/>
		</div>
	);
};

export default Medsos;
