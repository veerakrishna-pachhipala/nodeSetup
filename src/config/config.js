const environment=process.env.NODE_ENV;
import dev from './dev';
import prod from './prod';
const config={
    dev,prod
}
export default config[environment] || config.dev;