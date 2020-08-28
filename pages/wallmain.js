import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
/*
import WallOrganism from '../components/organims/Wall';
import Layout from '../components/Layout';
*/
import {
	row,
	py3,
	px0,
	pr0,
	container,
	col,
	Col3,
	Col6,
	colmd1,
	colmd2,
	colmd3,
	colmd4,
	colmd5,
	colmd6,
	colmd7,
	colmd9,
	colmd10,
	colmd12,
	label,
	textcenter
} from '../styles/styles';
import logolinkw from '../public/imagenes/Logo-inc.png';
import searchicon from '../public/icons/wall-profile/btnSearch.png';
import imgFriends from '../public/icons/wall-profile/friends-on.png';
import imginfo from '../public/icons/wall-profile/info-on.png';
import imgNotifications from '../public/icons/wall-profile/notifications-on.png';
import imgcerrar from '../public/icons/wall-profile/closeWhite.png';
import imgaddasfriend from '../public/icons/wall-profile/Invite-friend-on.png';
import iconwall from '../public/icons/wall-profile/Muro-Personal.png';
import walloff from '../public/icons/wall-profile/Muro-Personal-off.png';
import imgoptA1 from '../public/icons/wall-profile/PP-ON.png';
import iconprivateon from '../public/icons/wall-profile/private-on.png';
import closeoff from '../public/icons/wall-profile/closeoff.png';
import iconciudadactual from '../public/icons/wall-profile/city-on.png';
import iconlugardetrabajo from '../public/icons/wall-profile/work-on.png';
import iconschool from '../public/icons/wall-profile/school-on.png';
import iconcityfrom from '../public/icons/wall-profile/city-from-on.png';
import iconfeeling from '../public/icons/wall-profile/feeling-on.png';
import iconinterest from '../public/icons/wall-profile/interest-on.png';

import iconciudadactualOff from '../public/icons/wall-profile/city-off.png';
import iconlugardetrabajoOff from '../public/icons/wall-profile/work-off.png';
import iconschoolOff from '../public/icons/wall-profile/school-off.png';
import iconcityfromOff from '../public/icons/wall-profile/city-from-off.png';
import iconfeelingOff from '../public/icons/wall-profile/feeling-off.png';
import iconinterestOff from '../public/icons/wall-profile/interest-off.png';

import iconWallOff from '../public/icons/wall-profile/wall-off.png';
import iconPostsOn from '../public/icons/wall-profile/posts-on.png';

import iconPostOn from '../public/icons/wall-profile/post-on.png';
import iconPhotovideoOn from '../public/icons/wall-profile/photovideo-on.png';
import iconLiveOn from '../public/icons/wall-profile/live-on.png';
import iconPlaceOn from '../public/icons/wall-profile/place-on.png';

import iconCloseWhite from '../public/icons/wall-profile/closeWhite.png';

import iconPeopleknowOn from '../public/icons/wall-profile/people-know-on.png';
import iconMoreOn from '../public/icons/wall-profile/more-on.png';
import imgMarcos from '../public/imagenes/marcos.jpg';
import imgMiguel from '../public/imagenes/miguel.png';
import imgAlejandro from '../public/imagenes/bullon.png';

import iconborder from '../public/icons/wall-profile/border-photo-2.png';

import iconLikeOn from '../public/icons/wall-profile/likeon.png';
import iconCommentOn from '../public/icons/wall-profile/comment-on.png';
import iconDislikeOn from '../public/icons/wall-profile/dislike-on.png';
import iconinvite from '../public/icons/wall-profile/Invite-friend-on.png';

const Header = styled.div`
	box-sizing: border-box;
	${row} ${py3} background: #00a79d;
`;
const ContainerHeader = styled.div`
	box-sizing: border-box;
	${container} @media (min-width: 1200px) {
		max-width: 1220px;
	}
`;
const DivLogo = styled.div`
	box-sizing: border-box;
	${colmd2} flex: 0 0 13.666667%;
	max-width: 13.666667%;
	-ms-flex: 0 0 13.666667%;
`;

const LogoStyled = styled.div`
	box-sizing: border-box;
	width: 100%;
	text-align: center;
`;
const LogoSrcStyled0 = styled.div`
	box-sizing: border-box;
	position: absolute;
	bottom: 0;
`;
const LogoSrcStyled = styled.img.attrs({ src: logolinkw })`
    box-sizing: border-box;
    width: 100%;
    vertical-align: middle;
    border-style: none;
`;

const Row = styled.div`
	box-sizing: border-box;
	${row};
`;

const Colmd12 = styled.div`${colmd12};`;

const DivHeader2 = styled.div`
	${colmd4} -ms-flex: 0 0 28.333333%;
	flex: 0 0 28.333333%;
	max-width: 28.333333%;
`;

const FriendSearch = styled.label`${label} color: #fff !important;`;
const DivInputsearch = styled.div`
	background: #fff;
	width: 310px;
	padding: 3px 0px;
	box-sizing: border-box;
`;

const SearchIcon = styled.img.attrs({ src: searchicon })`
    box-sizing: border-box;
    width: 100%;
    vertical-align: middle;
    border-style: none;
    width: 33px;
`;

const Inputsearch = styled.input.attrs({ placeholder: 'Buscar' })`
width: 270px;
-webkit-text-decoration: none;
text-decoration: none;
border: 3px solid white;
background: #fff;
outline: none;
color: #808080;
border: 1px solid #fff;
border-left-color: rgb(255, 255, 255);
border-left-style: solid;
border-left-width: 1px;
border-left-color: rgb(225, 225, 225);
border-left-style: solid;
border-left-width: 1px;
overflow: visible;
margin: 0;
font-family: inherit;
font-size: inherit;
line-height: inherit;
box-sizing: border-box;
`;
const Colmd1 = styled.div`${colmd1};`;

const Divbtncerrar = styled.div`
	-ms-flex: 0 0 14%;
	flex: 0 0 auto;
	max-width: 14%;
	position: relative;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	box-sizing: border-box;
`;
const Divbtnsright = styled.div`
	flex: 0 0 6.333333%;
	flex: 0 0 6.333333%;
	max-width: 6.333333%;
	position: relative;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
`;
const DivBtn0 = styled.div`
	position: absolute;
	bottom: 10px;
	box-sizing: border-box;
`;

const ImgFriends = styled.img.attrs({ src: imgFriends })`
    vertical-align: middle;
    border-style: none;
    box-sizing: border-box;
    width:100%;
    :hover {
        filter: brightness(0.33);
        cursor: pointer;
    }
`;

const ImgFriends2 = styled.img.attrs({ src: imgFriends })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
`;
const IconMoreOn = styled.img.attrs({ src: iconMoreOn })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
`;

const ImgFriend1 = styled.img.attrs({ src: imgMarcos })`
width: 50px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
border-radius: 50%;
`;
const ImgFriend2 = styled.img.attrs({ src: imgMiguel })`
width: 50px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
border-radius: 50%;
`;
const ImgFriend3 = styled.img.attrs({ src: imgAlejandro })`
width: 50px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
border-radius: 50%;
`;

const ImgFriendBorder = styled.div`
	background: url(${iconborder});
	background-size: 60px 60px;
	background-repeat: no-repeat;
	padding: 5px;
	float: left;
`;

const ImgInfo = styled.img.attrs({ src: imginfo })`
    vertical-align: middle;
    border-style: none;
    box-sizing: border-box;
    width:100%;
    :hover {
        filter: brightness(0.33);
        cursor: pointer;
    }
`;
const ImgNotifications = styled.img.attrs({ src: imgNotifications })`
    vertical-align: middle;
    border-style: none;
    box-sizing: border-box;
    width:100%;
    :hover {
        filter: brightness(0.33);
        cursor: pointer;
    }
`;
const DivName = styled.div`
	position: absolute;
	bottom: 0;
`;
const DivphotoProfile = styled.div`
	background: url(/icons/wall-profile/border-photo-2.png);
	background-repeat: repeat;
	background-size: auto;
	background-repeat: no-repeat;
	background-size: 64px 64px;
	padding: 6px;
`;
const Photoprofile = styled.img.attrs({ src: '/imagenes/manuel-photo.jpg' })`
border-radius: 50%;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
width:52px;
:hover {
    cursor: pointer;
}
`;
const Name = styled.h1`
	color: #fff !important;
	font-size: 1.25rem;
	margin-bottom: .5rem;
	font-weight: 500;
	line-height: 1.2;
	margin-top: 0;
	box-sizing: border-box;
`;

const Name2 = styled.h2`
	color: #606062 !important;
	font-size: 1.7rem;
	margin-bottom: .5rem;
	font-weight: 500;
	line-height: 1.2;
	margin-top: 10;
	box-sizing: border-box;
	text-align: center;
`;

const BtnInicio = styled.a`
	outline: none;
	border: 3px solid white;
	color: #fff;
	background-color: #00a79d;
	padding: 0px 20px;
	border-radius: 20px;
	margin: 2px 2px;
	box-sizing: content-box;
	display: inline-block;
	-webkit-text-decoration: none;
	text-decoration: none;
	white-space: normal;
	word-wrap: break-Word;
	text-align: center;
	cursor: pointer;
	:hover {
		background-color: #fff;
		color: #00a79d;
	}
`;

const BtnCerrar = styled.a`
	outline: none;
	border: 3px solid white;
	color: #fff;
	background-color: #00a79d;
	padding: 0px 20px;
	border-radius: 20px;
	margin: 2px 2px;
	box-sizing: content-box;
	display: inline-block;
	-webkit-text-decoration: none;
	text-decoration: none;
	white-space: normal;
	word-wrap: break-Word;
	text-align: center;
	cursor: pointer;
	:hover {
		background-color: #fff;
		color: #00a79d;
	}
`;
const ImgCerrar = styled.img.attrs({ src: imgcerrar })`
width: 20px;
vertical-align: middle;
border-style: none;
color: #fff;
white-space: normal;
word-wrap: break-Word;
text-align: center;
cursor: pointer;
`;
const Span = styled.span``;
let UlSearch = styled.ul`
	padding-left: 0px;
	margin-top: 3px;
	margin-bottom: 3px;
`;
let LiSearch = styled.li`
	list-style: none;
	padding: 5px 5px;
	:hover {
		background: #ddd;
	}
`;

const Checkfilter = styled.input.attrs({ type: 'checkbox' })`
border: 0;
`;
const DivIconPostOnbig = styled.div`
	float: left;
	border-right: 2px solid #fff;
	padding-right: 10px;
`;
const DivoptA3text = styled.div`
	float: left;
	padding-top: 7px;
	padding-left: 20px;
`;
const DivoptA3text2 = styled.div`
	float: left;
	padding-left: 20px;
`;
const DivoptA3check = styled.div`
	float: right;
	padding-top: 7px;
`;

const wall = () => {
	return (
		<div>
			<Header>
				<ContainerHeader>
					<Row>
						<DivLogo>
							<LogoSrcStyled0>
								<LogoSrcStyled />
							</LogoSrcStyled0>
						</DivLogo>
						<DivHeader2>
							<Row>
								<Colmd12>
									<FriendSearch>Búsqueda de redes y amigos</FriendSearch>
									<DivInputsearch>
										<Inputsearch
											onChange={(e) => handleChange(e.target.value)}
											onKeyDown={(e) => handleKeyDown(e)}
										/>
										<SearchIcon />
									</DivInputsearch>
								</Colmd12>
							</Row>
						</DivHeader2>
						<Colmd1>
							<DivphotoProfile>
								<Photoprofile />
							</DivphotoProfile>
						</Colmd1>
						<Colmd1>
							<DivName>
								<Name>Manuel Montero</Name>
							</DivName>
						</Colmd1>
						<Colmd1>
							<DivBtn0>
								<BtnInicio>Inicio</BtnInicio>
							</DivBtn0>
						</Colmd1>
						<Divbtncerrar>
							<DivBtn0>
								<BtnCerrar>
									<ImgCerrar /> Cerrar
								</BtnCerrar>
							</DivBtn0>
						</Divbtncerrar>
						<Divbtnsright>
							<DivBtn0>
								<ImgFriends />
							</DivBtn0>
						</Divbtnsright>
						<Divbtnsright>
							<DivBtn0>
								<ImgInfo />
							</DivBtn0>
						</Divbtnsright>
						<Divbtnsright>
							<DivBtn0>
								<ImgNotifications />
							</DivBtn0>
						</Divbtnsright>
					</Row>
				</ContainerHeader>
			</Header>

			<Row>
				<Container4>
					<Row>
						<Colmd3A>
							<DivoptA>
								<Divavatar2>
									<DivphotoProfile2>
										<ImgProfile />
									</DivphotoProfile2>
									<Name2>Manuel Montero</Name2>
								</Divavatar2>
								<DivoptA1>
									Selecciona el tipo de publicaciones que quieres ver en tu muro sicial.
								</DivoptA1>
								<DivoptA3>
									<DivIconPostOnbig>
										<IconPostOnbig />
									</DivIconPostOnbig>{' '}
									<DivoptA3text>Publicaciones</DivoptA3text>{' '}
									<DivoptA3check>
										<Checkfilter />
									</DivoptA3check>
								</DivoptA3>
								<DivoptA3>
									<DivIconPostOnbig>
										<IconPhotovideoOnBig />
									</DivIconPostOnbig>{' '}
									<DivoptA3text>Fotos</DivoptA3text>{' '}
									<DivoptA3check>
										<Checkfilter />
									</DivoptA3check>
								</DivoptA3>

								<DivoptA3>
									<DivIconPostOnbig>
										<IconLiveOnBig />
									</DivIconPostOnbig>{' '}
									<DivoptA3text>Videos</DivoptA3text>{' '}
									<DivoptA3check>
										<Checkfilter />
									</DivoptA3check>
								</DivoptA3>
								<DivoptA3>
									<DivIconPostOnbig>
										<IconPlaceOnBig />
									</DivIconPostOnbig>{' '}
									<DivoptA3text2>
										Lugares <br />Acontecimientos
									</DivoptA3text2>{' '}
									<DivoptA3check>
										<Checkfilter />
									</DivoptA3check>
								</DivoptA3>
								<DivoptA4>
									<BtnInicio>Aplicar</BtnInicio>
								</DivoptA4>
							</DivoptA>
							<DivoptB>
								<Divoptfriendconnected>
									<ImgFriends2 /> Amigos Conectados
								</Divoptfriendconnected>
								<Link href="/marco">
									<a>
										<DivoptA1>
											<ImgFriendBorder>
												<ImgFriend1 />
											</ImgFriendBorder>{' '}
											<FriendName>Marcos Rodriguez</FriendName>
										</DivoptA1>
									</a>
								</Link>
								<Link href="/miguel">
									<a>
										<DivoptA1>
											<ImgFriendBorder>
												<ImgFriend2 />
											</ImgFriendBorder>{' '}
											<FriendName>Miguel Nuñez</FriendName>
										</DivoptA1>
									</a>
								</Link>
								<Link href="/alejandro">
									<a>
										<DivoptA1>
											<ImgFriendBorder>
												<ImgFriend3 />
											</ImgFriendBorder>{' '}
											<FriendName>Alejandro Bullón</FriendName>
										</DivoptA1>
									</a>
								</Link>
								<Divseemore>
									<DivoptA1Icon>
										<IconMoreOn />
									</DivoptA1Icon>{' '}
									<DivoptA1Text>
										Todos mis Amigos <br />ONLINE
									</DivoptA1Text>
								</Divseemore>
							</DivoptB>
							<DivoptA>
								<Divpeoplemayknow>
									<ImgoptA1t>
										<ImgoptA1 />
									</ImgoptA1t>
									<ImgoptA1t2>
										Personas que<br />quizás conozcas
									</ImgoptA1t2>
								</Divpeoplemayknow>
								<DivoptA11>
									<ImgFriendBorder>
										<ImgFriend3 />
									</ImgFriendBorder>{' '}
									<FriendName>Alejandro Bullón</FriendName>
								</DivoptA11>
								<DivoptA11>
									<ImgFriendBorder>
										<ImgFriend1 />
									</ImgFriendBorder>{' '}
									<FriendName>Marcos Rodriguez</FriendName>
								</DivoptA11>
								<DivoptA1>
									<ImgFriendBorder>
										<ImgFriend2 />
									</ImgFriendBorder>{' '}
									<FriendName>Miguel Nuñez</FriendName>
								</DivoptA1>

								<Divseemore>
									<DivoptA1Icon>
										<IconMoreOn />
									</DivoptA1Icon>
									<FriendName2>Más Personas</FriendName2>
								</Divseemore>
							</DivoptA>
							<DivoptC>
								<DivoptCd>
									<DivoptCo1>
										<DivoptCoimg />
									</DivoptCo1>
									<Divoptclose>Cerrar Sesión</Divoptclose>
								</DivoptCd>
								<DivoptCd2>
									<DivoptCo>
										<DivoptCoimg2 />
									</DivoptCo>
									<Divoptclose>Muro Personal</Divoptclose>
								</DivoptCd2>
							</DivoptC>
						</Colmd3A>
						<Colmd9A>
							<Colmd9Aa>
								<Colmd9Aaa>
									<Link href="/">
										<a>
											<Colmd9Aaaimg />
											Muro Personal
										</a>
									</Link>
								</Colmd9Aaa>
								<Colmd9Aab>
									<Colmd9Aableft>
										<DivAvatar3>
											<Colmd9AableftImg />
										</DivAvatar3>
									</Colmd9Aableft>
									<Colmd9Aabcenter>
										<Colmd9AabcenterP>¿ Que Piensas ?</Colmd9AabcenterP>
									</Colmd9Aabcenter>
									<Colmd9Aabright>
										<Colmd9AabrightImg />
									</Colmd9Aabright>
								</Colmd9Aab>
								<Colmd9Aac>
									<Colmd9Aac1>
										<IconPostOn /> Crear publicación
									</Colmd9Aac1>
									<Lineseparator />
									<Colmd9Aac2>
										<IconPhotovideoOn />
										Foto / Video
									</Colmd9Aac2>
									<Lineseparator />
									<Colmd9Aac3>
										<IconLiveOn />
										Video en vivo
									</Colmd9Aac3>
									<Lineseparator />
									<Colmd9Aac4>
										<IconPlaceOn />
										Lugar o acontecimiento
									</Colmd9Aac4>
								</Colmd9Aac>
								<Postphoto>
									<Headerpost>
										<Row>
											<HpostphotoCol1>
												<HpostphotoCol1Img>
													<AvatarPostAuthor src="/imagenes/marcos.jpg" />
												</HpostphotoCol1Img>
												<HpostphotoCol1Name>Miguel Cruzcaxas</HpostphotoCol1Name>
											</HpostphotoCol1>
											<HpostphotoCol2>Julio 25 2020</HpostphotoCol2>
											<HpostphotoCol3>
												<HpostphotoCol3Div1>
													<HpostphotoCol3Icon1 />
												</HpostphotoCol3Div1>
												<HpostphotoCol3Div2>
													<HpostphotoCol3Icon2 />
												</HpostphotoCol3Div2>
												<HpostphotoCol3Div3>
													<HpostphotoCol3Icon3 />
												</HpostphotoCol3Div3>
											</HpostphotoCol3>
										</Row>
									</Headerpost>
									<Bodypostphoto>
										<Imgpost src="/imagenes/post1.jpg" />
									</Bodypostphoto>
									<Footerpost>
										<Row>
											<DivLike>
												<DivIconLike>
													<IconLikeOn />
												</DivIconLike>
											</DivLike>
											<DivComment>
												<DivIconComment>
													<IconCommentOn />
												</DivIconComment>
											</DivComment>
											<DivDislike>
												<DivIconDislike>
													<IconDislikeOn />
												</DivIconDislike>
											</DivDislike>
										</Row>
									</Footerpost>
								</Postphoto>
								<Postvideo>
									<Headerpost>
										<Row>
											<HpostphotoCol1>
												<HpostphotoCol1Img>
													<AvatarPostAuthor src="/imagenes/marcos.jpg" />
												</HpostphotoCol1Img>
												<HpostphotoCol1Name>Miguel Cruz</HpostphotoCol1Name>
											</HpostphotoCol1>
											<HpostphotoCol2>Julio 25 2020</HpostphotoCol2>
											<HpostphotoCol3>
												<HpostphotoCol3Div1>
													<HpostphotoCol3Icon1 />
												</HpostphotoCol3Div1>
												<HpostphotoCol3Div2>
													<HpostphotoCol3Icon2 />
												</HpostphotoCol3Div2>
												<HpostphotoCol3Div3>
													<HpostphotoCol3Icon3 />
												</HpostphotoCol3Div3>
											</HpostphotoCol3>
										</Row>
									</Headerpost>
									<Bodypostvideo>
										<DivPlayBtn>
											<DivPlayBtn2>
												<ImgPlayBtn />
											</DivPlayBtn2>
										</DivPlayBtn>
										<Imgpost src="/imagenes/post2.jpg" />
									</Bodypostvideo>
									<Footerpost>
										<Row>
											<DivLike>
												<DivIconLike>
													<IconLikeOn />
												</DivIconLike>
											</DivLike>
											<DivComment>
												<DivIconComment>
													<IconCommentOn />
												</DivIconComment>
											</DivComment>
											<DivDislike>
												<DivIconDislike>
													<IconDislikeOn />
												</DivIconDislike>
											</DivDislike>
										</Row>
									</Footerpost>
								</Postvideo>
							</Colmd9Aa>
						</Colmd9A>
					</Row>
				</Container4>
			</Row>
		</div>
	);
};

const DivoptA1Icon = styled.div`float: left;`;
const DivoptA1Text = styled.div`
	float: left;
	padding-left: 10px;
`;

const Divoptclose = styled.div`
	float: left;
	padding-left: 15px;
	width: 90px;
	color: #fff;
`;

const FriendName = styled.div`
	float: left;
	padding-top: 17px;
`;
const FriendName2 = styled(FriendName)`
padding-top: 7px;
`;

const ImgoptA1t = styled.div`
	float: left;
	border-right: 2px solid #fff;
	padding-right: 20px;
`;
const ImgoptA1t2 = styled.div`
	float: left;
	padding-left: 20px;
`;
const DivoptC = styled.div`background: #595b61;`;
const DivoptCd = styled.div`
	overflow: hidden;
	padding: 0px 10px;
	padding-left: 1.5rem !important;
	padding-right: 1.5rem !important;
	padding-top: 1rem;
	padding-bottom: 1rem;
	:hover {
		background: #fff;
		cursor: pointer;
	}
	:hover div {
		color: #595b61 !important;
	}
	:hover img {
		opacity: 0;
	}
	:hover div:first-child {
		border-right: 2px solid #717171;
	}
`;
const DivoptCd2 = styled(DivoptCd)`
overflow: hidden;
background: #00a79d;
`;
const DivoptCo1 = styled.div`
	float: left;
	width: 80px;
	padding-top: 10px;
	padding-left: 10px;
	border-right: 2px solid #fff;
	color: #fff !important;
	background: url(${closeoff});
	background-size: 40px 40px;
	background-position: 10px 10px;
	background-repeat: no-repeat;
`;

const DivoptCo = styled.div`
	float: left;
	width: 80px;
	padding-top: 10px;
	padding-left: 10px;
	border-right: 2px solid #fff;
	color: #fff !important;
	background: url(${walloff});
	background-size: 40px 40px;
	background-position: 10px 10px;
	background-repeat: no-repeat;
`;

const DivoptCoimg = styled.img.attrs({ src: iconCloseWhite })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
`;

const DivoptCoimg2 = styled.img.attrs({ src: iconwall })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
`;

const DivoptD = styled.div`
	padding-left: 1.5rem !important;
	padding-right: 1.5rem !important;
	padding-bottom: 1rem !important;
	padding-top: 1rem !important;
`;

/////////////////////////////
///// iconos off ////////////

const IconciudadactualOff = styled.div`
	background: url(${iconciudadactualOff});
	background-size: 40px 40px;
	background-repeat: no-repeat;
	display: inline-block;
`;
const IconlugardetrabajoOff = styled.div`
	background: url(${iconlugardetrabajoOff});
	background-size: 40px 40px;
	background-repeat: no-repeat;
	display: inline-block;
`;
const IconschoolOff = styled.div`
	background: url(${iconschoolOff});
	background-size: 40px 40px;
	background-repeat: no-repeat;
	display: inline-block;
`;
const IconcityfromOff = styled.div`
	background: url(${iconcityfromOff});
	background-size: 40px 40px;
	background-repeat: no-repeat;
	display: inline-block;
`;
const IconfeelingOff = styled.div`
	background: url(${iconfeelingOff});
	background-size: 40px 40px;
	background-repeat: no-repeat;
	display: inline-block;
`;
const IconinterestOff = styled.div`
	background: url(${iconinterestOff});
	background-size: 40px 40px;
	background-repeat: no-repeat;
	display: inline-block;
`;

///// iconos off ////////////
/////////////////////////////
const IconPostOn = styled.img.attrs({ src: iconPostOn })`
height: 30px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
`;

const IconPostOnbig = styled.img.attrs({ src: iconPostOn })`
height:40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
`;

const IconPhotovideoOn = styled.img.attrs({ src: iconPhotovideoOn })`
height: 30px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
`;

const IconPhotovideoOnBig = styled.img.attrs({ src: iconPhotovideoOn })`
height: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
`;

const IconLiveOn = styled.img.attrs({ src: iconLiveOn })`
height: 30px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
`;

const IconLiveOnBig = styled.img.attrs({ src: iconLiveOn })`
height: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
`;

const IconPlaceOn = styled.img.attrs({ src: iconPlaceOn })`
height: 30px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
padding-left: 2px;
`;
const IconPlaceOnBig = styled.img.attrs({ src: iconPlaceOn })`
height: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
padding-left: 2px;
`;

const IconWall = styled.img.attrs({ src: iconwall })`
height: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
`;
const IconPostsOn = styled.img.attrs({ src: iconPostsOn })`
height: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
`;

const Colmd9Aad1 = styled.div`
	${colmd7} color: #fff !important;
	text-align: center !important;
	padding-bottom: 1rem !important;
	padding-top: 1rem !important;

	:hover img {
		filter: brightness(0.33);
		cursor: pointer;
	}
	:hover {
		background: #fff;
		cursor: pointer;
		color: #595b61 !important;
	}
`;
const Colmd9Aad2 = styled.div`
	${colmd5} color: #fff !important;
	text-align: center !important;
	padding-bottom: 1rem !important;
	padding-top: 1rem !important;
	:hover img {
		filter: brightness(0.33);
		cursor: pointer;
	}
	:hover {
		background: #fff;
		cursor: pointer;
		color: #595b61 !important;
	}
`;
const Colmd9Aac1 = styled.div`
	${col} color: #fff !important;
	text-align: center !important;
	padding-bottom: 1rem !important;
	padding-top: 1rem !important;
	:hover img {
		filter: brightness(0.33);
	}
	:hover {
		background: #fff;
		cursor: pointer;
		color: #595b61 !important;
	}
	padding-left: 0px !important;
	padding-right: 0px !important;
`;
const Lineseparator = styled.div`
	width: 2px;
	border: 1px solid #fff;
`;
const Colmd9Aac2 = styled(Colmd9Aac1)`
${col}
max-width: 180px;
`;
const Colmd9Aac3 = styled(Colmd9Aac1)`
${col}
max-width: 180px;
`;
const Colmd9Aac4 = styled(Colmd9Aac1)`
${col}
`;

const Colmd9Aac = styled.div`
	${row} border-bottom: 3px solid #6a6a6a;
	background: #00a79d;
	margin-left: 0 !important;
	margin-right: 0 !important;
`;
const Colmd9Aad = styled.div`
	${row} background: #00a79d;
	margin-top: .5rem !important;
	margin-left: 0 !important;
	margin-right: 0 !important;
`;

const Colmd9AabrightImg = styled.img.attrs({ src: iconWallOff })`
border-radius: 50%;
width: 100px;
vertical-align: middle;
border-style: none;
vertical-align: middle;
border-style: none;

`;

const Colmd9AabcenterP = styled.p`
	border-left: 2px solid #ccc;
	color: #646363;
	padding-left: 1rem !important;
	padding-bottom: 1rem !important;
	padding-bottom: 1rem !important;
	font-size: 1.5rem;
	margin-bottom: .5rem;
	font-weight: 500;
	line-height: 1.2;
	margin-top: 0;
`;
const Colmd9AableftImg = styled.img.attrs({ src: 'imagenes/manuel-photo.jpg' })`
border-radius: 50%;
width: 100px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
text-align: center !important;
`;

const Avatar2 = styled.img.attrs({ src: 'imagenes/manuel-photo.jpg' })`
border-radius: 50%;
width: 130px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
text-align: center !important;
`;

const Colmd9Aableft = styled.div`
	${Col3} text-align: center !important;
	margin-bottom: auto !important;
	margin-top: auto !important;
	box-sizing: border-box;
`;
const Colmd9Aabcenter = styled.div`
	${Col6} margin-bottom: auto !important;
	margin-top: auto !important;
`;
const Colmd9Aabright = styled.div`
	${Col3} text-align: center !important;
	margin-bottom: auto !important;
	margin-top: auto !important;
`;
const Colmd9Aab = styled.div`
	${row} background: #fff;
	height: 150px;
	border: 3px solid #6a6a6a;
	border-top-color: rgb(106, 106, 106);
	border-top-style: solid;
	border-top-width: 3px;
	border-top: initial;
	box-sizing: border-box;
`;

const Divoptfriendconnected = styled.div`
	color: #fff !important;
	padding-left: 2rem !important;
	padding-right: 2rem !important;
	padding-top: 1rem;
	padding-bottom: 1rem;
`;
const DivoptB1 = styled.div`
	color: #fff !important;
	padding-left: 2rem !important;
	padding-right: 2rem !important;
	padding-top: 1rem;
	padding-bottom: 1rem;
	:hover img {
		opacity: 0;
	}
	:hover {
		color: #00a79d !important;
		cursor: pointer;
		background: #fff;
	}
`;
/*
iconciudadactual
iconlugardetrabajo
iconschool
iconcityfrom
iconfeeling
iconinterest
 */

const DivoptBimg1 = styled.img.attrs({ src: iconciudadactual })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
color: #fff !important;
`;
const DivoptBimg2 = styled.img.attrs({ src: iconlugardetrabajo })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
color: #fff !important;
`;
const DivoptBimg3 = styled.img.attrs({ src: iconschool })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
color: #fff !important;
`;

const DivoptBimg4 = styled.img.attrs({ src: iconcityfrom })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
color: #fff !important;
`;
const DivoptBimg5 = styled.img.attrs({ src: iconfeeling })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
color: #fff !important;
`;
const DivoptBimg6 = styled.img.attrs({ src: iconinterest })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
color: #fff !important;
`;
const DivoptB = styled.div`background: #595b61;`;

const DivoptA2b = styled.div`
	float: left;
	width: 50%;
	border-right: 2px solid #fff;
	color: #fff !important;
	box-sizing: border-box;
`;
const DivoptA2c = styled.div`
	float: left;
	width: 40%;
	padding-left: 10px;
	color: #fff !important;
	box-sizing: border-box;
	position: relative;
	top: 10px;
`;

const DivoptA2bs = styled.div`
	float: left;
	width: 70px;
	border-right: 2px solid #fff;
	color: #fff !important;
	margin-right: 10px;
	box-sizing: border-box;
`;
const DivoptA2cs = styled.div`
	float: left;
	width: 40%;
	padding-left: 10px;
	color: #fff !important;
	box-sizing: border-box;
`;

const DivoptA = styled.div`box-sizing: border-box;`;

const DivoptA1 = styled.div`
	color: #fff !important;
	box-sizing: border-box;
	padding-left: 2rem !important;
	padding-right: 2rem !important;
	padding-top: 1rem !important;
	padding-bottom: 1rem !important;
	overflow: hidden;
	:hover {
		background: #fff;
		color: #595b61 !important;
		cursor: pointer;
	}
	:hover div:first-child {
		background: url(/icons/wall-profile/border-photo-1.png);
		background-size: 60px 60px;
		background-repeat: no-repeat;
		padding: 5px;
		float: left;
	}
`;
const Divseemore = styled(DivoptA1)`
:hover div:first-child {
    background: none;
    filter: brightness(0.33);
    padding: 0px;
} 
`;

const Divseemore2 = styled(DivoptA1)`

`;

const DivoptA11 = styled.div`
	color: #fff !important;
	box-sizing: border-box;
	padding-left: 2rem !important;
	padding-right: 2rem !important;
	padding-top: 1rem !important;
	padding-bottom: 1rem !important;
	overflow: hidden;
	:hover {
		background: #595b61;
		color: #fff !important;
		cursor: pointer;
	}
	:hover div:first-child {
		background: url(/icons/wall-profile/border-photo-1.png);
		background-size: 60px 60px;
		background-repeat: no-repeat;
		padding: 5px;
		float: left;
	}
`;

const Divpeoplemayknow = styled.div`
	color: #fff !important;
	box-sizing: border-box;
	padding-left: 2rem !important;
	padding-right: 2rem !important;
	padding-top: 1rem !important;
	padding-bottom: 1rem !important;
	overflow: hidden;
`;

const Divavatar2 = styled.div`
	color: #fff !important;
	box-sizing: border-box;
	padding-left: 2rem !important;
	padding-right: 2rem !important;
	padding-top: 3rem !important;
	padding-bottom: 1rem !important;
	overflow: hidden;
	text-align: center;
	background: #c4e0dd;
`;
const DivAvatar3 = styled.div`
	background: url(/icons/wall-profile/border-photo-1.png);
	background-size: 110px 110px;
	background-repeat: no-repeat;
	background-position: center;
	padding: 12px;
`;

const ImgoptInvite = styled.img.attrs({ src: imgaddasfriend })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
`;

const ImgoptA1 = styled.img.attrs({ src: iconPeopleknowOn })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
`;
const Iconprivateon = styled.img.attrs({ src: iconprivateon })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
`;

const DivoptA2 = styled.div`
	overflow: hidden;

	box-sizing: border-box;
	padding-left: 2.5rem !important;
	padding-right: 2.5rem !important;
	padding-bottom: 1rem !important;
	padding-top: 1rem !important;
`;
const DivoptA3 = styled.div`
	color: #fff !important;
	box-sizing: border-box;
	padding-left: 1.5rem !important;
	padding-right: 1.5rem !important;
	padding-bottom: 0.5rem !important;
	padding-top: 0.5rem !important;
	overflow: hidden;
`;
const DivoptA4 = styled.div`
	color: #fff !important;
	box-sizing: border-box;
	padding-left: 1.5rem !important;
	padding-right: 1.5rem !important;
	padding-bottom: 0.5rem !important;
	padding-top: 0.5rem !important;
	text-align: right;
`;

const Colmd9Aa = styled.div`
	background: #00a79d;
	height: 100px;
	padding-top: 1.5rem !important;
	margin-top: .5rem !important;
	box-sizing: border-box;
`;

const Colmd9Aaa = styled.div`
	color: #fff !important;
	text-align: center !important;
	font-size: 2rem;
	margin-bottom: .5rem;
	font-weight: 500;
	line-height: 1.2;
	box-sizing: border-box;
	:hover {
		filter: brightness(0.33);
	}
`;
const Colmd9Aaaimg = styled.img.attrs({ src: iconwall })`
width: 50px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
`;

const Colmd3A = styled.div`${colmd3} ${px0} background: #00a79d;`;
const Colmd9A = styled.div`${colmd9} ${pr0};`;

const Container4 = styled.div`
	${container} background: #C4E0DD;
	padding: 0px;
`;
const BtnAddasfriend = styled.a`
	outline: none;
	color: #fff;
	background-color: #00a79d;
	padding: 0px 5px;
	margin: 2px 2px;
	margin-top: 2px;
	margin-top: 27px;
	box-sizing: content-box;
	display: inline-block;
	-webkit-text-decoration: none;
	text-decoration: none;
	white-space: normal;
	word-wrap: break-Word;
	text-align: center;
	cursor: pointer;
	:hover img {
		filter: brightness(0.33);
	}
	:hover {
		color: #595b61 !important;
	}
`;
const ImgAddasfriend = styled.img.attrs({ src: imgaddasfriend })`
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff;
white-space: normal;
word-wrap: break-Word;
text-align: center;
cursor: pointer;
width: 40px;
`;
const DivphotoProfile2 = styled.div`
	height: 150px;
	width: 150px;
	background: url(/icons/wall-profile/border-photo-1.png);
	background-repeat: repeat;
	background-size: auto;
	background-repeat: no-repeat;
	background-size: 150px 150px;
	padding: 6px;

	box-sizing: border-box;
	margin-left: auto;
	margin-right: auto;
`;

const ImgProfile = styled.img.attrs({ src: '/imagenes/manuel-photo.jpg' })`
box-sizing: border-box;
vertical-align: middle;
border-style: none;
border-radius: 50%;
width:100%
`;
const BtnInfo = styled.a`
	outline: none;
	border: 3px solid white;
	color: #fff;
	background-color: #00a79d;
	padding: 0px 20px;
	border-radius: 20px;
	margin: 2px 2px;
	box-sizing: content-box;
	display: inline-block;
	-webkit-text-decoration: none;
	text-decoration: none;
	white-space: normal;
	word-wrap: break-Word;
	text-align: center;
	cursor: pointer;
	:hover {
		background: #fff;
		color: #00a79d;
	}
`;
const BtnFriends = styled(BtnInfo)`
width: 85px;
margin: 10px 2px;
`;
const BtnHistorial = styled(BtnInfo)`
width: 85px;

`;

const Container3 = styled.div`
	${container} background: #00a79d;
	padding: 0px;
`;
const Colmd10A = styled.div`
	${colmd10} background: url(imagenes/bg-manuel.jpg);
	background-position-x: 0%;
	background-position-y: 0%;
	background-repeat: repeat;
	background-repeat: no-repeat;
	padding: 6px;
	background-position: center;
`;
const Colmd2A = styled.div`${colmd2} ${textcenter};`;
//// POST DE TIPO PHOTO
const Postphoto = styled.div`margin-bottom: 10px;`;

const Postvideo = styled.div`margin-bottom: 10px;`;

const HpostphotoCol1 = styled.div`${col};`;
const HpostphotoCol2 = styled.div`
	${col} max-width: 20%;
	color: #fff;
	text-align: center;
	border-left: 1px solid #fff;
	border-right: 1px solid #fff;
	padding-top: 10px;
`;
const HpostphotoCol3 = styled.div`${col};`;
const HpostphotoCol1Img = styled.div`
	float: left;
	margin-right: 10px;
	background: url(/icons/wall-profile/border-photo-2.png);
	background-repeat: no-repeat;
	width: 48px;
	height: 48px;
	background-size: 48px 48px;
	padding-top: 4px;
	padding-left: 4px;
`;
const AvatarPostAuthor = styled.img`
	width: 40px;
	border-radius: 50%;
`;
const HpostphotoCol1Name = styled.div`
	float: left;
	font-weight: bold;
	color: #fff;
	margin-top: 10px;
`;

const HpostphotoCol3Div1 = styled.div`
	float: right;
	margin-left: 10px;
`;
const HpostphotoCol3Div2 = styled.div`
	float: right;
	margin-left: 10px;
`;
const HpostphotoCol3Div3 = styled.div`
	float: right;
	margin-left: 10px;
`;
const HpostphotoCol3Icon1 = styled.img.attrs({ src: iconPhotovideoOn })`
    width: 40px;
    :hover {
        filter: brightness(0.33);
        cursor: pointer;
    }
`;
const HpostphotoCol3Icon2 = styled.img.attrs({ src: iconwall })`
width: 40px;
:hover {
    filter: brightness(0.33);
    cursor: pointer;
}
`;
const HpostphotoCol3Icon3 = styled.img.attrs({ src: iconinvite })`
width: 40px;
:hover {
    filter: brightness(0.33);
    cursor: pointer;
}
`;
const Bodypostphoto = styled.div``;
const Bodypostvideo = styled.div`position: relative;`;

const Footerpost = styled.div`
	background: #00a79d;
	padding: 10px 0px;
`;

const Headerpost = styled(Footerpost)`
`;
const IconLikeOn = styled.img.attrs({ src: iconLikeOn })`
width: 40px;
:hover {
    filter: brightness(0.33); 
    cursor: pointer;
}
`;

const IconCommentOn = styled.img.attrs({ src: iconCommentOn })`
width: 40px;
:hover {
    filter: brightness(0.33); 
    cursor: pointer;
}
`;

const IconDislikeOn = styled.img.attrs({ src: iconDislikeOn })`
width: 40px;
:hover {
    filter: brightness(0.33); 
    cursor: pointer;
}
`;
const DivIconLike = styled.div``;
const DivIconComment = styled.div``;
const DivIconDislike = styled.div``;

const DivLike = styled.div`
	${col} text-align: right;
	padding-left: 15px;
	padding-top: 7px;
`;

const DivComment = styled.div`
	${col} border-left: 1px solid #fff;
	border-right: 1px solid #fff;
	text-align: center;
	max-width: 10%;
	padding: 5px;
	padding-top: 9px;
`;
const DivDislike = styled.div`
	${col} text-align: left;
	padding: 5px 10px;
	padding-top: 7px;
`;
const Imgpost = styled.img`width: 100%;`;
const DivPlayBtn = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
`;
const DivPlayBtn2 = styled.div`
	width: 150px;
	:hover img {
		opacity: 1;
		cursor: pointer;
	}
`;
const ImgPlayBtn = styled.img.attrs({ src: iconLiveOn })`
width: 100%;
opacity: 0.6;
`;

//// POST DE TIPO PHOTO
export default wall;
