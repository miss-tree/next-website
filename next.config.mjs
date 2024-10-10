/** @type {import('next').NextConfig} */
import {resolve} from "path"

const nextConfig = {
 webpack:(config,options)=>{
  config.resolve.alias['app'] = resolve("./",'./app');
  config.resolve.alias['utils'] = resolve("./",'./utils');
  config.resolve.alias['https'] = resolve("./",'./app/api');
  config.resolve.alias['styles'] = resolve("./",'./static');
  return config
 }

};

export default nextConfig;
