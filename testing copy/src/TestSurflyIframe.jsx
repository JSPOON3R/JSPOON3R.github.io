import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TestSurflyIframe.scss';

const TestSurflyIframe = () => {
    const SurflySessionRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const sessionLink = location.state?.link;
    const userName = location.state?.name;
    const [isFollowerStarted, setFollowerStarted] = useState(false);
    const [followrLink, setFollowerLink] = useState('');
    const thisConsole = console;

    useEffect(() => {
        (function (s, u, r, f, l, y) {
            s[f] = s[f] || {
                init: function () {
                    s[f].q = arguments;
                },
            };
            l = u.createElement(r);
            y = u.getElementsByTagName(r)[0];
            l.async = 1;
            l.src = 'https://surfly.com/surfly.js';
            y.parentNode.insertBefore(l, y);
        })(window, document, 'script', 'Surfly');

        const settings = {
            widget_key: '99671227762b43c2a96daa066ee006e2', 
            embedded_sessions_only: false,
            private_session: false,
            chat_enabled: false,
            password_required: false,
            host_switching_allowed: true,
            block_until_agent_joins: false,
            start_with_chat_open: false,
            start_with_loading_screen: false,
            videochat: false,
            session_autorestore_enabled: true,
            end_redirect_enabled: false,
            language: 'en',
            alternative_proxy_enabled: true,
            participants_can_request_to_interact: true,
            hide_session_ui: true,
            white_label: false,
        };

        window.Surfly.init(settings, (initResult) => {
            if (initResult.success) {
                thisConsole.log('Surfly initialized successfully');
                if (!window.Surfly.isInsideSession) {
                    thisConsole.log('Not inside a session');
                    try {
                        SurflySessionRef.current = window.Surfly.session({ url: sessionLink }).startLeader(
                            '#sessionIframe',
                            {
                                name: userName,
                            },
                        );

                        SurflySessionRef.current.on('session_created', (session, event) => {
                            thisConsole.log(
                                'leader link =',
                                session.leaderLink,
                                ' follower link =',
                                session.followerLink,
                            );
                            // setSessionStarted(true);
                            setFollowerLink(session.followerLink);
                        });

                        SurflySessionRef.current.on('session_ended', (session) => {
                            thisConsole.log('Session ended:', session);
                            setFollowerStarted(false);
                            navigate('/testURLCard');
                        });
                    } catch (error) {
                        thisConsole.error('Error starting Surfly session:', error);
                    }
                }
            } else {
                thisConsole.error('Surfly initialization failed:', initResult.error);
            }
        });

        return () => {
            if (SurflySessionRef.current) {
                SurflySessionRef.current.end();
            }
        };
    }, [thisConsole, sessionLink, userName, navigate]);

    const startFollower = () => {
        setFollowerStarted(true);

        thisConsole.log('Follower started: ' + followrLink);
    };

    const endSession = () => {
        if (window.Surfly) {
            thisConsole.log('Ending Surfly session...');
            SurflySessionRef.current.end();
            setFollowerStarted(false);
        } else {
            thisConsole.error('Surfly is not available');
        }
    };

    return (
        <div class="co-browsing-session">
            <iframe src={sessionLink} title="Collaboration Session" className="iframe-content" id="sessionIframe" />
            <div className="fixed-bar">
                <button className="fixed-bar-btn" onClick={startFollower} disabled={isFollowerStarted}>
                    Start Session
                </button>
                <button className="fixed-bar-btn" onClick={endSession} disabled={!isFollowerStarted}>
                    End Session
                </button>
            </div>
        </div>
    );
};

export default TestSurflyIframe;