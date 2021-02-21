import { UrlBuilder } from './../../shared/classes/url-builder';
import { Injectable } from '@angular/core';
import { QueryStringParameters } from '../../shared/classes/query-string-parameters';
import { Constants } from 'src/app/config/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointsService {
  
  constructor(private constants: Constants) { }

  // URL
  private createUrl(action: string, isMockApi: boolean = false): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(isMockApi ? this.constants.API_MOCK_ENDPOINT: this.constants.API_ENPOINT, action);

    return urlBuilder.toString();
  }

   /* #region URL CREATOR */
  // URL with Query Params
  private createUrlWithParameters(action: string, queryStringHandler?: (queryStringParameters: QueryStringParameters) => void): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(this.constants.API_ENPOINT, action);

    if (queryStringHandler){
      queryStringHandler(urlBuilder.queryString);
    }
    
    return urlBuilder.toString();
  }

  // URL with Path Variables
  private createUrlWithPathVariables(action: string, pathVariables: any[] = []): string {
    let encodedPathvariablesUrl: string = '';

    // Push the extra path variables
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathvariablesUrl += `/${encodeURIComponent(pathVariable.toString())}`; 
      }
    }
    
    const urlBuilder: UrlBuilder = new UrlBuilder(this.constants.API_ENPOINT, `${action}${encodedPathvariablesUrl}`);

    return urlBuilder.toString();
  }
  
  /* #endregion URL CREATOR */

  /* #region URL ENDPOINT */
  public getSignupEndpoint(isMockApi: boolean = false): string {
    return this.createUrl('account/register', isMockApi);
  }

  /* #endregion URL ENDPOIN */



  /* EXAMPLES createUrlWithParameters */
  public geTenantEndpoint(
    username: string, 
    tenantName: string
  ): string {
    return this.createUrlWithParameters(
      'tenant', 
      (qs: QueryStringParameters) => {
        qs.push('username', username);
        qs.push('tenantName', tenantName);
      }
    );
  }
  // result: https://marikisa.io/api/tenant?username=theUsernamen&tenantName=theTenantName

  /* EXAMPLES createUrlWithPathVariables */
  public geTenantByVarEndpoint(
    username: string, 
    tenantName: string
  ): string {
    return this.createUrlWithPathVariables('data', [username, tenantName]);
  }
  // result: https://markisa.io/api/data/the-username/the-tenantname
}
