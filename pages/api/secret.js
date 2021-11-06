import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(function SecretRoute(req, res) {
    const session = getSession(req, res);
    const user = session.user;
});
