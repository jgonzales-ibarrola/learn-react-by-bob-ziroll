import { useArticle } from "../hooks/useArticle";
import { ArticleProvider } from "../providers/articleProvider";
import { ArticleData } from "../types/articleTypes";

const ArticleThumbnail = () => {
	const {
		img: { src, alt },
	} = useArticle();

	return (
		<div className="w-[125px] h-[168px] flex-none">
			<img
				src={src}
				alt={alt}
				className="w-full h-full object-cover rounded-sm"
			/>
		</div>
	);
};

const ArticleHeader = () => {
	const { title, country, googleMapsLink } = useArticle();

	return (
		<div className="grid gap-1 mb-6">
			<div className="flex gap-3">
				{/* Country */}
				<div className="flex gap-1 items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-3 h-3 text-red-500"
						fill="currentColor"
						viewBox="0 0 384 512"
					>
						<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
					</svg>
					<span className="text-xs uppercase">{country}</span>
				</div>

				{/* Google Maps Link */}
				<a
					href={googleMapsLink}
					className="inline-block text-gray-600 underline underline-offset-2 text-xs"
				>
					View on Google Maps
				</a>
			</div>

			<h2 className="text-2xl font-bold">{title}</h2>
		</div>
	);
};

const ArticleContent = () => {
	const { text, dates } = useArticle();

	return (
		<div className="grid gap-2">
			<time dateTime={dates} className="font-semibold text-xs">
				{dates}
			</time>
			<p className="text-xs">{text}</p>
		</div>
	);
};

const Article = ({
	img: { src, alt },
	title,
	country,
	googleMapsLink,
	dates,
	text,
	className,
}: ArticleData) => {
	return (
		<ArticleProvider
			value={{
				img: {
					src,
					alt,
				},
				title,
				country,
				googleMapsLink,
				dates,
				text,
			}}
		>
			<article className={`flex gap-4 max-w-[434px] pb-6 ${className}`}>
				<ArticleThumbnail />
				<div className="flex-1 py-4">
					<ArticleHeader />
					<ArticleContent />
				</div>
			</article>
		</ArticleProvider>
	);
};

export default Article;
